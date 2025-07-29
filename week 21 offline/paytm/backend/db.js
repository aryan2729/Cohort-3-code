import mongoose, { model, mongo, Schema }  from "mongoose";
import MONGO_URL from "./config";

mongoose.connect(MONGO_URL);



const userSchema = new Schema({
    username : {type : String , unique : true },
    password : {type : String },
    firstName : {type : String },
    lastName : {type : String }
})


export const User = mongoose.model("User" , userSchema);



const accountSchema = new Schema({
    userId : {type : mongoose.Schema.Types.ObjectId ,  // same as foregin key in prisma we can't add balance witbout having username or userId
             ref : "User",
             required : true 
    },  
    balance : {type : Number , required: true}
})

export const Account = mongoose.model("Account", accountSchema);
