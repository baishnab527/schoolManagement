import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const verifyToken = (req, res, next) =>{
    const {accessToken} = req.cookies;

    if(!accessToken){
        res.status(401).json({Message: "Unathorized"});

        // token verify
        jwt.verify(accessToken, process.env.JWT_SCREET, asyncHandler(async(error, decode) =>{
            return res.status(400).json({Message: "Invalid token"});
        }
    
        ));
    }

    next();
}