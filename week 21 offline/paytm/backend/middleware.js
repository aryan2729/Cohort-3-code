import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const authMiddleware = ( req , res , next ) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
        }
 
    const token = authHeader.split(' ')[1];
        
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
        req.userId = decoded.userId;
        next();
        }
        else{
            return res.status(403).json({});
        }

    } catch (err) {

        return res.status(403).json({});
        }
};
