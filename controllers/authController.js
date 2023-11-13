import bcrypt from "bcrypt";
import express from "express";
import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler"
import Student from "../models/Student.js";


/**
 * @DESCRIPTION LOGIN STUDNET 
 * @ROUTE /api/v1/login
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const loginStudent = asyncHandler(async(req, res) =>{

    // get form data 
    const {password, email, phone} = req.body;

    // validation form data 
    if(!password ||!email ||!phone){
        return res.status(400).json({Message: "All Fileds are required"});
    }

    // login student email check;
    const loginStudent = await Student.findOne({email});

    if(!loginStudent){
        return res.status(400).json({Message: "Invlaid Emalil Address"});
    }


    // login Student phone check;
    const phoneCheck = await Student.findOne({phone});
    if(!phoneCheck){
        return res.status(400).json({Message: "Invlid Phone Number"});
    }

    // password check 
    const passwordMatch = bcrypt.compare(password, loginStudent.password);
    if(!passwordMatch){
       return res.status(400).json({Message: "Wrong Password"});
    }

    // create access token
    const accessToken =  jwt.sign({email: loginStudent.email}, process.env.JWT_SCREET,{expiresIn: "10h"});

    // set access token
    res.cookie("accessToken", accessToken, {httpOnly: true, secure: process.env.APP_ENV === "Development" ? false: true, sameSite: "strict", path: "/", maxAge: 7*24*60*60*1000});

    // gender declearation
    let gender = null;
    if(loginStudent.gender === "Male"){
        gender = "Mr";
    }else if(loginStudent.gender === "Female"){
        gender = "Mrs";
    };

    // send response 
    res.status(200).json({Message: `Hello ${gender} ${loginStudent.name} You are loged in`, Student: loginStudent, token: accessToken});  
});

/**
 * @DESCRIPTION CLEARE COOKIE 
 * @ROUTE /api/v1/logout
 * @METHOD GET
 * @ACCESS PUBLIC
 */
export const logoutStudent = asyncHandler(async(req, res) =>{
    // clear cookies
    res.clearCookie("accessToken");

    // send response
    res.status(200).json({Message: "You are loged out"});
});