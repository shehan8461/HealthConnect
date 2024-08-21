const postModel = require('../models/postModel');

const createPostController = async (req, res) => {
    try {
        const { userId, serviceType,bookingDate,contact,specialIndustries } = req.body;

        // Validation: Check if all fields are provided
        if ( !userId || !serviceType || !bookingDate || !contact || !specialIndustries) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields',
            });
        }


        // Create and save the post
        const post = new postModel({
            userId,
            serviceType,
            bookingDate,
            contact,
            specialIndustries,
            postedBy: req.auth._id,
        });

        await post.save();  // Save post to the database

        // Send successful response
        res.status(201).send({
            success: true,
            message: "Post created successfully",
            post,
        });

        console.log("New post created:", post);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,  // Corrected the success status
            message: 'Error in post API',
            error,
        });
    }
};


const getAllPostsController=async(req,res)=>{
 try{
    const posts=await postModel.find()
    res.status(200).send({
        success:true,
        message:"All Posts Data",
        posts,
    })
 }catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:"error in getallposts api",
        error
    })
 }
}


//get user posts only

 const getUserPostsController=async(req,res)=>{
    try{
        const userPosts=await postModel.find({postedBy:req.auth._id});
        res.status(200).send({
            success:true,
            message:"user posts",
            userPosts,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:true,
            message:"error api of user",
           error
        })
    }
 }

 //delete user posts
 const deleteUserPostsController=async(req,res)=>{
    try{
        const {id}=req.params;
        await postModel.findByIdAndDelete({_id:id});
        res.status(200).send({
            success:true,
            message:"your post been deleted!"
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in delete post api",
            error
        })
    }
 }

module.exports = { createPostController,getAllPostsController,getUserPostsController,deleteUserPostsController };
