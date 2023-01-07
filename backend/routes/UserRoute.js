const express=require('express')
const {getUsers,createUser,updateUser,verifyUser,getOneUser}=require('../controllers/userControllers')
const userRouter=express.Router()
userRouter.get('/',getUsers)
userRouter.post('/create',createUser)
userRouter.patch('/update',updateUser)
userRouter.post('/verify',verifyUser)
userRouter.post('/getOneUser',getOneUser)

module.exports=userRouter