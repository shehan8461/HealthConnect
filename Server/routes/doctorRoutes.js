const express=require('express')

const { requireSignIn} = require('../controller/userController')
const {createDoctorController,getAllDoctorController} = require('../controller/doctorController')


const router=express.Router()

router.post('/create-doctor',requireSignIn,createDoctorController)

//get all posts
router.get('/get-all-doctor-posts',getAllDoctorController)


module.exports=router
