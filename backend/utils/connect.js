const mongoose=require('mongoose')
const uri='mongodb://lahcen:lahcen@ac-hbdcbfz-shard-00-00.gwxwr6f.mongodb.net:27017,ac-hbdcbfz-shard-00-01.gwxwr6f.mongodb.net:27017,ac-hbdcbfz-shard-00-02.gwxwr6f.mongodb.net:27017/?ssl=true&replicaSet=atlas-qc9en4-shard-0&authSource=admin&retryWrites=true&w=majority'
const ConnectDb=()=>{
    mongoose.set('strictQuery', false)
    mongoose.connect(uri).then(()=>{
        console.log('connected')
    })
}
module.exports=ConnectDb
