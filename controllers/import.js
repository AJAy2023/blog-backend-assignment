 const axios = require("axios");
 const Post  =  require("../models/post");
 require("dotenv").config();
console.log("the post api  :" ,  process.env.Post_API);
 const  importdata  = async (req, res)=>{
     try{
     
    const  response =  await axios.get(process.env.Post_API);

    const  postsdata =  response.data;
    
     const  formateposts  = postsdata.map(post =>({
        ExternalId : post.id,
        title : post.title,
        body : post.body,
        userId : post.userId
     }));

       
      for(const postItem   of  formateposts)
      {
            await  Post.updateOne({ExternalId:postItem.ExternalId},
                {$set:postItem},
                {upsert:true}
         )
      }
   
      return res.status(201).json({
        message:"Posts imported successfully"
      });
     }catch(err)
     {
        return  res.status(500).json({
            message:"Internal server error",
            error:err.message
        });
     }
 }

 module.exports=importdata;
       
           
 