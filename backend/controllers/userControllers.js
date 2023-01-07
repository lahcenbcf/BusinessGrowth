const { Types } = require('mongoose')
const USER=require('../models/user')
const validateEmail=require('../utils/validateEmail')

const getUsers=async (req,res)=>{
    const users=await USER.find().select('-pass').lean()
    if(users.length !== 0){
        return res.json(users)
    }
    return res.json({message:"no user found"})
}
const createUser=async(req,res)=>{
    const {username,password,email}=req.body
    if(!username || !password || !email){
        return ({message:'invalid inputs'})
    }
    const isDuplicate=await USER.findOne({username:username,password:password})
    if(isDuplicate){
        return res.json({message:"user exsist before"})
    }
    const newUser=new USER(req.body)
    await newUser.save()
    return res.json({message:"a user has been added successufuly"})
}

const updateUser=async(req,res)=>{
    const {_id,linkedin}=req.body
    console.log(req.body)
    const user=await USER.findById({_id:Types.ObjectId(_id)})
    if(user){
            user.linkedin=linkedin
            await user.save()
            return res.json('user has been updated')
    }
    return res.json({message:"user not found"})
}

const verifyUser=async(req,res)=>{
    const {data,password}=req.body
    const test=validateEmail(data)
    let isFound;
    if(test){
        isFound=await USER.findOne({email:data,password:password})
    }else{
        isFound=await USER.findOne({username:data,password:password})
    }
    
    if(isFound){
        return res.send(true)
    }
    return res.send(false)
}

const getOneUser=async(req,res)=>{
    const {password}=req.body
    const user=await USER.findOne({password:password})
    console.log(user)
    return res.json(user)
}
module.exports={getUsers,createUser,updateUser,verifyUser,getOneUser}