import mongoose from "mongoose";

// create a students Schema
const teamSchema = mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        minlength: 2,
        maxlength: 20,
    },
    
    leader: {
        type: String,
        trim: true,
    },

    member: {
        type: Number,
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
export default mongoose.model("Team" , teamSchema);

