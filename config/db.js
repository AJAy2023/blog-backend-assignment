const  mongoose  = require("mongoose");
require("dotenv").config();
const  dbconnect  = async ()=>{
    try
    {
        await  mongoose.connect(process.env.MongoUrl)
        console.log("mongodb is connected..");
    }catch(err)
    {
        console.log("mongo db  failed to  connect");
    }
}

module.exports=dbconnect;