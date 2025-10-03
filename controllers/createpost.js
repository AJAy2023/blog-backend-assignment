const Post  =  require("../models/post");
const  createthepost  = async (req, res)=>{
    try{
        const {ExternalId, title,body,userId} = req.body;
        const post  = await  Post.create({
            ExternalId:ExternalId,
            title:title,
            body:body,
            userId:userId
        });
                await post.save();

        return res.status(200).json({
            message:"Post created succssefully",
            post
        })
    }catch(err)
    {
        return res.status(500).json({
        message:"Internal server error",
        error:err.message
        });
    }
}


// delete the post  

const deletepost  =  async (req , res)=>{
    try{
        const {id} = req.params;
        const findpost  = await Post.findById(id);
        if(!findpost)
        {
            return res.status(404).json({
                message:"post not found"
            });
        }

              await  findpost.deleteOne();

        return  res.status(200).json({
            message:"delted succssefully",
            findpost
        });

    }catch(err)
    {
        return res.status(500).json({
            message:"server error",
            error:err.message
        });
    }
}



//  update 
const updatepost  = async (req, res)=>{
    try{
        const {id} = req.params;
        const update = req.body;

        const updatedpost =  await Post.findByIdAndUpdate(
            id,
            {$set:update},
            {new:true}
        );

        if(!updatedpost)
        {
            return res.status(404).json({
                message:"Post not  found"
            })
        }

        return res.status(200).json({
            message:"post updated successfully",
            updatedpost
        })

    }catch(err)
    {
        return res.status(500).json({
            message:"server error",
            error:err.message
        });
    }
}


module.exports={createthepost , deletepost, updatepost };