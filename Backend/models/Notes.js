import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title : {
        type : String,
        required : true
    },

    content :{
        type : String,
        required : true
   } }, { timestramps : true})

module.exports = mongoose.model("Note" , noteSchema);