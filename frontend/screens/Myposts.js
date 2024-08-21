import { View, Text,StyleSheet,ScrollView ,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'

import FootMenu from '../componenet/Menus/FootMenu';
import axios from 'axios'
import moment from 'moment'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Myposts = () => {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false)

        const handleDeletePromt=(id)=>{
            Alert.alert("attention!","Are you Sure Want to delete this post?",[
                {
                    text:"Cansel",
                    onPress:()=>{
                        console.log("cansel press")
                    },
                },
                {
                    text:"Delete",
                    onPress:()=>handleDeletePost(id),
                }
            ])
        };
        const  handleDeletePost=async(id)=>{
            try{
                setLoading(true)
                const {data}=await axios.delete(`/posts/delete-user-posts/${id}`)
                setLoading(false)
                alert(data?.message)
            }catch(error){
                setLoading(false)
                console.log(error)
                alert(error)
            }
        }
  

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
            
                        <Text style={styles.title}>UserId: {post?.userId}</Text>
            <Text style={styles.text}>ServiceType: {post?.serviceType}</Text>
            <Text style={styles.text}>BookingDate: {post?.bookingDate}</Text>
            <Text style={styles.text}>Contact: {post?.contact}</Text>
            <Text style={styles.text}>SpecialIndustries: {post?.specialIndustries}</Text>
            <Text style={styles.trashIcon}>
            <FontAwesome5 name="trash" size={16} color={styles.trashIcon.color} onPress={() => handleDeletePromt(post?._id)} />
            </Text>
            <Text style={styles.date}>{moment(post?.createdAt).format("DD:MM:YYYY")}</Text>

         
         </View>

      ))}

    </ScrollView>
    <View style={{backgroundColor:"#ffffff"}}>
    <FootMenu/>
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      justifyContent: 'space-between',
      marginTop: 40,
      backgroundColor: '#f8f9fa',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 2,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 5,
    },
    text: {
      fontSize: 14,
      color: '#555555',
      marginBottom: 5,
    },
    trashIcon: {
      textAlign: 'right',
      color: '#e63946',
      marginBottom: 10,
    },
    date: {
      fontSize: 12,
      color: '#6c757d',
      marginTop: 10,
    },
    footer: {
      backgroundColor: '#ffffff',
      padding: 10,
    },
  });
  
export default Myposts