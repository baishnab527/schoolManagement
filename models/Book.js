import mongoose from "mongoose";

// create a students Schema
const bookSchema = mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        minlength: 2,
        maxlength: 50,
        required: true,
    },
    
    writer: {
        type: String,
        trim: true,
    },

    price: {
        type: Number,
        trim: true,
    },

    language: {
        type: String,
        trim: true,
    },
   
    photo: {
        type: String,
        trim: true,
        default: null,
    },

    trash: {
        type: Boolean,
        default: true,
    },

    status: {
        type: Boolean,
        default: true,
    },
},{
    timestamps: true,
});

// export default model
export default mongoose.model("Book" , bookSchema);

