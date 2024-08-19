const JWT=require('jsonwebtoken')
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const userModel=require('../models/userModel')
var { expressjwt: jwt } = require("express-jwt");


//middleware
const requireSignIn=jwt({
     secret:process.env.JWT_SECRET, 
     algorithms: ["HS256"] 
})

//REGISTER
const registerController=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name){
            return res.status(400).send({
                success:false,
                message:"name is required"
            })
        }
        if(!email){
            return res.status(400).send({
                success:false,
                message:"email is required"
            })
        }
        if(!password||password.length<6){
            return res.status(400).send({
                success:false,
                message:"password is required"
            })
        }
        const exisitingUser=await userModel.findOne({email})
        if(exisitingUser){
            return res.status(500).send({
                success:false,
                message:'user already register with this email'
            })
        }
        const hashedPassword=await hashPassword(password)

        const user=await userModel({name,email,password:hashedPassword}).save();

        return res.status(201).send({
            success:true,
            message:'registration successfull please login'
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in register API',
            error,
        })
    }
};



//LOGIN
const LoginCntroller=async(req,res)=>{
    try{
        const {email,password}=req.body

        if(!email||!password){
            return res.status(500).send({
                success:false,
                message:'Please Provide Email or Password'
            })
        }

        const user=await userModel.findOne({email})
        if(!user){
            return res.status(500).send({
                success:false,
                message:'User Not Found'
            })
        }

        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(500).send({
                success:true,
                message:'Invalid username or password'
            })
        }
        const token=await JWT.sign({ _id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        })
        user.password=undefined;
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            token,
            user,
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in login api',
            error
        })

    }
}
const updateUserController=async(req,res)=>{
    try{
        const {name,password,email}=req.body
        const user=await userModel.findOne({email})

        if(password && password.length<6){
            return res.status(400).send({
                success:false,
                message:'password is required and should be 6  character long'
            })
           
        }
        const hashedPassword=password? await hashPassword(password):undefined;
        const updateedUser=await userModel.findOneAndUpdate({email},{
            name:name||user.name,
            password:hashedPassword||user.password

        },{new:true})

        updateedUser.password=undefined;

        res.status(200).send({
            success:true,
            message:'profile updated please login',
            updateedUser
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in user update api",
            error
        })
    }
}

module.exports={registerController,LoginCntroller,updateUserController,requireSignIn}