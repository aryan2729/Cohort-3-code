const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.ObjectId;



const userSchema = new Schema ({
    
    email : {type : String  , unique : true } ,
    password : String , 
    firstName : String , 
    lastName : String 
    
})

const adminSchema = new Schema({

    email : {type : String  , unique : true } ,
    password : String , 
    firstName : String , 
    LastName : String 
})

const courseSchema = new Schema ({

    title : String , 
    description : String , 
    price : Number , 
    imageUrl : String , 
    createId : ObjectId  
})

const purchasesSchema = new Schema ({

    userId : ObjectId ,
    courseId : ObjectId 
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchasesSchema);



module.exports={                                  //🍁🍁 Exporting 
    userModel ,
    adminModel , 
    courseModel  , 
    purchaseModel
}