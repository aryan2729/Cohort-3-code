import mongoose, {model , mongo, Schema } from "mongoose";
import {MONGO_URL} from "./config";
import { ref } from "process";


mongoose.connect(MONGO_URL); 


const UserSchema = new Schema({
    username: {type : String , unique : true },  // unique means no sameUsername 
    password: {type: String }
})

export const UserModel = model( "User" , UserSchema);     // should export models 



const ContentSchema = new Schema({
    title : {type : String },
    text :  String ,
    link : { type : String  },
    type :  {type : String } , 
    tags : [ {type : mongoose.Types.ObjectId , ref: "Tag"} ],   // refer tag | and tags array of tags 
    userId : {type : mongoose.Types.ObjectId , ref: "User" , required:true }   // refer User and it must required 

})

export const ContentModel = model("Content" , ContentSchema);



const LinkSchema = new Schema({
    hash : String ,
    userId : {type : mongoose.Types.ObjectId , ref: "User" , required : true , unique : true }          // should be unique 
})

export const LinkModel = model("Links" , LinkSchema);
