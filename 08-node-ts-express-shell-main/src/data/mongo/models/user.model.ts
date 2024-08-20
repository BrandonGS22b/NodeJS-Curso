import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },

password:{
    type:String,
    required:[true,'Password is required'],
    minlength:[8,'Password must be at least 8 characters long'],
    
},
img:{
    type:String,
    default:'https://via.placeholder.com/150',
},
role:{
    type:[String],
    enum:['user','admin'],
    default:['user','admin'],
   
},

});
export const userModel = mongoose.model('User', userSchema);