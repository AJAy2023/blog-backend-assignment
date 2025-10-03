const express = require("express");
const router = express.Router();
const  {createthepost , deletepost ,updatepost} = require("../controllers/createpost");

router.post('/create' ,  createthepost);
router.delete('/delete/:id' , deletepost);
router.patch('/update/:id' , updatepost);


module.exports=router;