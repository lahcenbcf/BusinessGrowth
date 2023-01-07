const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
        required:false,
        default:""
    }
})
const USER=mongoose.model('USER',userSchema)
module.exports=USER