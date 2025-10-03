const express = require("express");
const router =  express.Router();
const importfiledata =  require("../controllers/import");

router.get('/posts' , importfiledata);


module.exports=router;