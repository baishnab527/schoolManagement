import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import { mongodbConnection } from "./config/mongodb.js";
import { errorHandler } from "./middleware/errorHandler.js";
import bookRouter from "./routes/book.js";
import studentRouter from "./routes/student.js";
import teamRouter from "./routes/team.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";


// env file import here;
dotenv.config();

// PORT config here
const PORT = process.env.PORT || 5052;

// init express;
const app = express();

app.use(cookieParser());

// Middleware setup
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// add static folder
app.use(express.static("public"));

// add error handler middleware
app.use(errorHandler); 


// add router
app.use(bookRouter);
app.use("/api/v1/student", studentRouter);
app.use(teamRouter);
app.use("/api/v1", authRouter);


// listen app;
app.listen(PORT, () =>{

    mongodbConnection()
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});