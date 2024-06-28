const jwt=require('jsonwebtoken')
const User=require('../models/user')

const auth=(req,res,next)=>{
    try{
        const token=req.header('Auth').replace('Bearer','')
        const decode=jwt.verify(token,"subash123")
        const user=User.findOne({_id:decode._id,'tokens.token':token})
        if(!user){
            throw new Error()
        }
        req.user=user
        next()
    }catch(e){
        res.status(400).send(e.message)
    }
}
module.exports=auth