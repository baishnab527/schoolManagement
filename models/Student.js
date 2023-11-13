import mongoose from "mongoose";

// creage mongoose Schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 11,
        maxlength: 11,
    },

    age: {
        type: Number,
        trim: true,
        min: 7,
        max:33,
    },

    address: {
        type: String,
        trim: true,
    },

    gender: {
        type: String,
        trim: true,
        enum: ["Male", "Female", "custom"],
    },

    dept: {
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
        default: null,
    },

    status: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

// Default export ;
export default mongoose.model("Student" , studentSchema);