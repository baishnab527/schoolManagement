import asyncHandler from "express-async-handler";
import Book from "../models/Book.js";
/**
 * @DESC CREATE BOOK DATA
 * @ROUTE /api/v1/book
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const createBook = asyncHandler(async(req, res) =>{
    // get form data 
    const {name , writer, language, price} = req.body;

    // Book data validation 
    if(!name || !writer || !language){
        return res.status(400).json({Message: "All fileds are required"});
    }

    // create new book
    const data = await Book.create({name , writer, language, price});

    // send response 
    res.status(201).json({Message: "Book data create successfully" , Book: data});
});


/**
 * @DESC GET ALL BOOK DATA
 * @ROUTE /api/v1/book
 * @METHOD GET
 * @ACCESS PUBLIC
 */
export const getAllBook = asyncHandler(async(req, res) =>{

    // get all book
    const data = await Book.find();

    // cheak book count;
    if(data.length === 0 ){
        res.status(404).json({Message: "Book Data not found" , Book : data});
    }

    // send response 
    res.status(200).json({Message: " " , Book: data});
});


/**
 * @DESC GETSINGLE BOOK DATA
 * @ROUTE /api/v1/book/:id
 * @METHOD GET
 * @ACCESS PUBLIC
 */
export const getSingleBook = asyncHandler(async(req, res) =>{

    // get params ;
    const {id} = req.params;

    // get single book
    const data = await Book.findById(id);

    // cheak book count;
    if(data.length === 0 ){
        res.status(404).json({Message: "Book Data not found" , Book : data});
    }

    // send response 
    res.status(200).json({Message: "" , Book: data});
});


/**
 * @DESC DELETE BOOK DATA
 * @ROUTE /api/v1/book/:id
 * @METHOD DELETE
 * @ACCESS PUBLIC
 */
export const deleteBook = asyncHandler(async(req, res) =>{

    // get params ;
    const {id} = req.params;

    // get single book
    const data = await Book.findByIdAndDelete(id);

    // cheak book count;
    if(!data ){
        res.status(404).json({Message: "Book Data not found" , Book : null});
    }

    // send response 
    res.status(200).json({Message: "Book data delete successfully" , Book: data});
});


/**
 * @DESC DELETE BOOK DATA
 * @ROUTE /api/v1/book/:id
 * @METHOD PATCH/PUT
 * @ACCESS PUBLIC
 */
export const updateBook = asyncHandler(async(req, res) =>{
    
    // get params ;
    const {id} = req.params;

    // get form data by distructure way
    const {name , writer, language, price} = req.body;

    // Book data validation 
    if(!name || !writer || language){
        return res.status(400).json({Message: "All fileds are required"});
    }

    // Update book data
    const data = await Book.findByIdAndUpdate(id ,{name , writer, language, price}, {new: true});

    // send response 
    res.status(201).json({Message: "Book data create successfully" , Book: data});
});


