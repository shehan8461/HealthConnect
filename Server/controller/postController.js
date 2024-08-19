const postModel = require('../models/postModel');

const createPostController = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validation: Check if all fields are provided
        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields',
            });
        }

        // Create and save the post
        const post = new postModel({
            title,
            description,
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

module.exports = { createPostController,getAllPostsController };
