const doctorModel = require('../models/doctorModels');

const createDoctorController = async (req, res) => {
    try {
        const { name, specialization } = req.body;

        // Validation: Check if all fields are provided
        if (!name || !specialization) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields',
            });
        }

        // Create and save the post
        const post = new doctorModel({
            name,
            specialization,
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


const getAllDoctorController=async(req,res)=>{
 try{
    const posts=await doctorModel.find()
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

module.exports = { createDoctorController,getAllDoctorController };
