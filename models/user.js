const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    user_id:{type:String, unique:true},
    name:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, select:false}
});

const user = mongoose.model('user', userschema);
module.exports=user;