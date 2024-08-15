const express=require('express')
const { registerController, LoginCntroller,updateUserController } = require('../controller/userController')

const router=express.Router()

router.post("/register",registerController)
router.post("/login",LoginCntroller)
router.put("/update-user",updateUserController)
module.exports=router