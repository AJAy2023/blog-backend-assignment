const  express = require("express");
const app  = express();
require("dotenv").config();
const dbconnect = require("./config/db");
dbconnect(); 

const getpostbyid  =  require("./routers/getdata");
const importpost = require("./routers/importpost");
const  createpost =  require("./routers/createpost");

const  port  = process.env.PORT||3000
app.get("/" ,  (req , res)=>{
    res.send("hello  wrold!");
})


app.use(express.json());

app.use('/', getpostbyid);
app.use('/', importpost);
app.use('/', createpost);

app.listen(port , ()=>{
    console.log(`the server  is running  on the  ${port}`);
})