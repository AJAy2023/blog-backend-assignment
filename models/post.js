const   mongoose = require("mongoose");
const postschema  = new mongoose.Schema({
    Externalid:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    userId:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Post" , postschema);

