const express=require('express')

const { requireSignIn} = require('../controller/userController')
const {createPostController,getAllPostsController,getUserPostsController,deleteUserPostsController} = require('../controller/postController')


const router=express.Router()

router.post('/create-post',requireSignIn,createPostController)

//get all posts
router.get('/get-all-posts',getAllPostsController)

//get User Posts
router.get('/get-user-posts',requireSignIn,getUserPostsController)


//delete User Posts
router.delete('/delete-user-posts/:id',requireSignIn,deleteUserPostsController)

module.exports=router

