const express=require('express')

const { requireSignIn} = require('../controller/userController')
const {createPostController} = require('../controller/postController')


const router=express.Router()

router.post('/create-post',requireSignIn,createPostController)


module.exports=router

