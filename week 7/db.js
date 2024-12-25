const mongoose = require("mongoose");       // database
const { type } = require("os");

const Schema = mongoose.Schema;             // Schema -> Means what is the structure of data | imported schema and objectId from mongoose 
const ObjectId = mongoose.ObjectId;         // ObjectId from mongoose 


const User = new Schema({                   // user schema 
    email : { type : String , unique : true } ,             // email should unique if same then give error  
    password : String,
    name : String 
})

const Todo = new Schema({                   // Todo schema 
    title : String , 
    Done : Boolean,
    userId : ObjectId
})


const UserModel = mongoose.model('user', User);          // where you wanna store data 
const TodoModel = mongoose.model('todo', Todo);         // (sending here , from this )       // and sending here means in mongodb compass todo  


module.exports = {                      // exporting 
    UserModel : UserModel  , 
    TodoModel : TodoModel
}


