import mongoose from "mongoose";

// create mongodb connection 
export const mongodbConnection = async () =>{
    try {
        const connection = mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connection success full`.bgCyan.black);
    } catch (error) {
        console.log(`Mongodb connection faild ${error}`.bgRed.black);
    }
};

