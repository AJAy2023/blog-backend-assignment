const Post  = require("../models/post");
const  importdata =  require("../controllers/import");

const  getallPost  = async(req, res)=>{
    try{
      const  getdata  = await  Post.find(); 
      return res.status(200).json({
        message:"data  feach succssefully : ",
         getdata
      })
    }catch(err)
    {
        return res.status(500).json({
            message:"Internal server error"
        });
    }
}


//  get the single   post  from the  db  

const  getpost  = async (req, res)=>{
    try{
    const {id} =  req.params;

    const postexist  =  await Post.findOne({ExternalId:id});
   
    if(!postexist)
    {
         return res.status(400).json({
            message:"Post  not  found"
        });
     }
     return res.status(200).json({
        message:"data fetched  succssefully",
        postexist
     })   
    }catch(err)
    {
        return res.status(500).json({
            message:"Internal server error : ",
            error:err.message
        });
    }
}




module.exports={getpost, getallPost};