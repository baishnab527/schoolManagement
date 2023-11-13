import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";


/**
 * @DESCRIPTION createStudent
 * @ROUTE /api/v1/student
 * @METHD POST
 * @ACCESS PUBLIC
 */

export const createStudent = asyncHandler(async(req, res) =>{
    // get form data by distructue way
    const { name, age, email, address, password, phone, dept, gender } = req.body;

    // validation form data
    if(!email || !password || !phone){
        return res.status(400).json({Message: "All Fields are required"});
    }

    // file management
    let studentPhoto = null;
    if(req.file?.filename){
        studentPhoto = req.file.filename;
    }

    // password hash
    const passwordHash = await bcrypt.hash(password, 10);

    //create access token 
    const accessToken = jwt.sign({email}, process.env.JWT_SCREET, {expiresIn: "10h"});

    // create New Student
    const data = await Student.create({ name, age, email, address, password: passwordHash, phone, dept, gender, photo: studentPhoto });

    // send response 
    res.status(201).json({Message: "Students Create Success full" , Student: data , Token: accessToken});
});


/**
 * @DESCRIPTION GET ALL STUDENT
 * @ROUTE /api/v1/student
 * @method GET
 * @ACCESS PUBLIC
 */

export const getAllStudent = asyncHandler(async(req, res) =>{
    // get all student
    const data = await Student.find();

    // check student count
    if(data.length === 0){
        res.status(404).json({Message: "Student Not Found", Student: data});
    }

    // send response
    res.status(200).json({Message: "" , Student: data});
});


/**
 * @DESCRIPTION GET SINGLE STUDENT
 * @ROUTE /api/v1/student/:id
 * @method GET
 * @ACCESS PUBLIC
 */

export const getSingleStudent = asyncHandler(async(req, res) =>{
    // get params ;
    const {id} = req.params;

    // get all student
    const data = await Student.findById(id);

    // check student count
    if(!data === 0){
        res.status(404).json({Message: "Student Not Found", Student: null});
    }

    // send response
    res.status(200).json({Message: "" , Student: data});
});

/**
 * @DESCRIPTION DELETE STUDENT
 * @ROUTE /api/v1/student/:id
 * @method DELETE
 * @ACCESS PUBLIC
 */

export const deleteStudent = asyncHandler(async(req, res) =>{
    // get params ;
    const {id} = req.params;

    // get all student
    const data = await Student.findByIdAndDelete(id);

    // check student count
    if(!data === 0){
        res.status(404).json({Message: "Student Not Found", Student: null});
    }

    // send response
    res.status(200).json({Message: "Student Delete Successfully" , Student: data});
});

/**
 * @DESCRIPTION UPDATE STUDENT
 * @ROUTE /api/v1/student
 * @METHD POST
 * @ACCESS PUBLIC
 */

export const updateStudent = asyncHandler(async(req, res) =>{

    //get params;
    const {id} = req.params;

    // get form data by distructue way
    const { name, age, email, address, phone, dept, gender } = req.body;

    // validation form data
    if(!email || !phone){
        return res.status(400).json({Message: "All Fields are required"});
    }

    // file management
    let studentPhoto = null;
    if(req.file?.filename){
        studentPhoto = req.file.filename;
    }

    // Update Student data 
    const data = await Student.findByIdAndUpdate( id, { name, age, email, address, phone, dept, gender, photo: studentPhoto }, {new: true});

    // send response 
    res.status(201).json({Message: "Students data update successfully" , Student: data  });
});




