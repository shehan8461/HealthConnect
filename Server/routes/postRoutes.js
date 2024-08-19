const express=require('express')

const { requireSignIn} = require('../controller/userController')
const {createPostController,getAllPostsController} = require('../controller/postController')


const router=express.Router()

router.post('/create-post',requireSignIn,createPostController)

//get all posts
router.get('/get-all-posts',getAllPostsController)


module.exports=router

