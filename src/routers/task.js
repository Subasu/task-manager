const express = require('express')
const Task = require('../models/task')
const router = express()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            return res.status(404).send({error:"Task does not exist"})
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updatedKeys = Object.keys(req.body)
    const allowedUpdateKeys = ['description', 'completed']
    const isValidOperation = updatedKeys.every((updatedKey) => allowedUpdateKeys.includes(updatedKey))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task=await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).send({error:"Task does not exist"})
        }
        updatedKeys.forEach((updatedKey)=>task[updatedKey]=req.body[updatedKey])
        await task.save()
        res.send({meggase:"Updated successfully",task})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send({error:"Task does not exist"})
        }

        res.send({message:"Deleted the task successfully",task})
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router