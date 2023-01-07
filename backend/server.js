const express=require('express')
const ConnectDb=require('./utils/connect')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./routes/UserRoute')
const app=express()
app.use(cors())
app.use(express.json())
const PORT=4000 || process.env.PORT
ConnectDb()
app.use('/users',userRouter)
mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>{
        console.log('server is running')
    })
})

