
// basic  server  

const  express = require("express");
const app  = express();
require("dotenv").config();
const dbconnect = require("./config/db");

dbconnect(); 
const  port  = process.env.PORT||3000
app.get("/" ,  (req , res)=>{
    res.send("hello  wrold!");
})

app.listen(port , ()=>{
    console.log(`the server  is running  on the  ${port}`);
})