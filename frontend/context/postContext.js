import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const PostContext=createContext()

const PostProvider=({children})=>{
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])

    const getAllPosts=async()=>{
        setLoading(true);

        try{
            const {data}=await axios.get("/doctors/get-all-doctor-posts")
            setLoading(false)
            setPosts(data?.posts)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    };
    useEffect(()=>{
        getAllPosts()
    },[])

    return(
        <PostContext.Provider value={[posts,setPosts]}>
            {children}
        </PostContext.Provider>
    )
}

export {PostContext,PostProvider};