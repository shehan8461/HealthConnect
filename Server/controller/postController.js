const postModel=require('../models/postModel');

const createPostController= async()=>{
    try{
        const {title,description}=req.body
        if(!title,description){
            return res.status(500).send({
                success:false,
                message:'please provide all fields'
            })
        }
        const post=await postModel({
            title,
            description,
            postedBy:req.auth._id
        })
        res.status(201).send({
            success:true,
            message:"post created successfully",
            post,
        })
        console.log(req);
        
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:true,
            message:'error in post API',
            error,
        })
    }
};

module.exports={createPostController}