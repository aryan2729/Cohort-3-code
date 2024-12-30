const jwt = require("jsonwebtoken");
const { JWT_SECRET_USER } = require("../config");


function userMiddleWare(req,res,next){


    const token = req.headers.token;

    try{

        const decoded = jwt.verify(token,JWT_SECRET_USER);

        req.userId = decoded.id;
        next();

    }catch(e){

        return res.status(403).json({
            message: "You are not signed in!",
        });
    }
    
}

module.exports={
    userMiddleWare : userMiddleWare
}