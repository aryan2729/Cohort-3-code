import express from "express";
import { authMiddleware} from "../middleware";
import { Account} from "../db";
import mongoose from "mongoose";

const router = express.Router();


router.get("/balance" , authMiddleware , async ( req , res)=>{

    const account = await Account.findOne({
        userId : req.userId
    });

    res.json({
        balace : account.balance
    })
});


router.post("/transfer" , authMiddleware , async ( req , res )=> {

    // startSession means it makes session 
    const session = await mongoose.startSession();

    // Session startTransaction & commitTransaction means from start to commit if anything written inside fails then whole thing that have done inside thes two code will not update 
    session.startTransaction();
    const { amount , to} = req.body;        // getting amount and to where i need to send money 

    // fetch acc. within transcation 
    const account = await Account.findOne({ userId : req.userId}).session(session); 

    if(!account ){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Invalid account"
        });
    }

    // Perform the transfer 
    await Account.updateOne({userId : req.userId }, { $inc : {balance : -amount}}).session(session);
    await Account.updateOne({userid : to} , {$inc : {balance : amount }}).session(session);

    //commit the trasaction 
    await session.commitTransaction();
    
    res.json({
        message : "Transaction successful"
    })
});


module.exports = router;