const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://cluster1.8vq1plv.mongodb.net/myFirstDatabase",{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log('mongoose connected');
})
.catch((err)=>{
    console.log('failed');
    console.log(err);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection