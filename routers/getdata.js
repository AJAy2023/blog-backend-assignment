const express =  require("express");
const router = express.Router();
const {getpost, getallPost}  = require("../controllers/blogtasks");

router.get('/posts', getallPost);
router.get('/api/:id' ,  getpost); 




module.exports = router;