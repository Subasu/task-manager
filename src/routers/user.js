const express = require('express')
const User = require('../models/user')
const auth=require('../middleware/auth')
const router = express()

router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const token =await user.generateAuthToken()
        await user.save()
        res.status(201).send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login',async (req,res)=>{
    try{
        const{email,password}=req.body
        const user=await User.findByCredientiels(email,password)
        const token=await user.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users',auth, async (req, res) => {
    
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/:id',auth, async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send({error:"User Does not Exist"})
        }

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/users/:id',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    // console.log(updates);
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user=await User.findById(req.params.id);
        updates.forEach((update)=>user[update]=req.body[update]);
        await user.save();
        
        if (!user) {
            return res.status(404).send({error:"User does not exist"})
        }

        res.send({message:"User Updated successfully",user})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id',auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send({error:"User does not exist"})
        }

        res.send({message:'deleted successfully',user})
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router