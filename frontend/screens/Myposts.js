import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'

import FootMenu from '../componenet/Menus/FootMenu';
import axios from 'axios'
import moment from 'moment'

const Myposts = () => {

    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false)

      const getUserPosts=async()=>{
        try{
            setLoading(true);
            const { data }=await axios.get("/posts/get-user-posts");
            setLoading(false)
            setPosts(data?.userPosts)
        }catch(error){
            setLoading(false)
            console.log(error)
            alert(error)
        }
      };

      useEffect(()=>{
        getUserPosts();
      },[]);
  return (

    <View style={styles.container}>
    <ScrollView>
    {posts?.map((post,i)=>(
        <View style={styles.card}key={i}>
          <Text style={styles.title}>Title: {post?.title}</Text>
          <Text>Description: {post?.description}</Text>
       
           <View>
           <Text> {post?.postedBy?.name}</Text>
           <Text> {moment(post?.createdAt).format("DD:MM:YYYY")}</Text>
           </View>
         </View>

      ))}

    </ScrollView>
    <View style={{backgroundColor:"#ffffff"}}>
    <FootMenu/>
    </View>
   
  </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        justifyContent:'space-between',
        marginTop:40
    }
})
export default Myposts