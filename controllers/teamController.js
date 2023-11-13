import asyncHandler from "express-async-handler"
import Team from "../models/Team.js";

/**
 * @DESCRIPTION CREATE TEAM DATA
 * @ROUTE /api/vi/team 
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const createTeam = asyncHandler(async(req, res) =>{
    // get form data
    const {name, member, leader} = req.body;

    // valid team data ;
    if(!name || !leader){
        return res.status(400).json({Message: "All fields are required"});
    }

    // create new team data
    const data = await Team.create({name, member, leader});

    // send response 
    res.status(201).json({Message: "Team data created Successfully", Team: data});
});

/**
 * @DESCRIPTION GET ALL TEAM DATA
 * @ROUTE /api/vi/team 
 * @METHOD GET
 * @ACCESS PUBLIC
 */
export const getAllTeam = asyncHandler(async(req, res) =>{
    
    // get all team
    const data = await Team.find();

    // cheack team count 
    if(data.length === 0){
        return res.status(404).json({Message: "Team data not found", Team: data});
    }

    // send resposnse
    res.status(200).json({Message: "", Team: data});
});


/**
 * @DESCRIPTION GET SINGLE DATA
 * @ROUTE /api/vi/team/:id 
 * @METHOD GET
 * @ACCESS PUBLIC
 */
export const getSingleTeam = asyncHandler(async(req, res) =>{

    // get params
    const {id} = req.params;
    
    // get Single team
    const data = await Team.findById(id);

    // cheack team count 
    if(data.length === 0){
        return res.status(404).json({Message: "Team data not found", Team: data});
    }

    // send resposnse
    res.status(200).json({Message: "", Team: data});
});


/**
 * @DESCRIPTION DELETE TEAM DATA
 * @ROUTE /api/vi/team/:id 
 * @METHOD DELETE
 * @ACCESS PUBLIC
 */
export const deleteTeam = asyncHandler(async(req, res) =>{

    // get params
    const {id} = req.params;
    
    // get Single team
    const data = await Team.findByIdAndDelete(id);

    // cheack team count 
    if(data.length === 0){
        return res.status(404).json({Message: "Team data not found", Team: data});
    }

    // send resposnse
    res.status(200).json({Message: "", Team: data});
});


/**
 * @DESCRIPTION CREATE TEAM DATA
 * @ROUTE /api/vi/team 
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const updateTeam = asyncHandler(async(req, res) =>{

    // get params
    const {id} = req.params;

    // get form data
    const {name, member, leader} = req.body;

    // valid team data ;
    if(!name || !leader){
        return res.status(400).json({Message: "All fields are required"});
    }

    // Update team data
    const data = await Team.findByIdAndUpdate(id,{name, member, leader}, {new: true});

    // send response 
    res.status(201).json({Message: "Team data Update Successfully", Team: data});
});
