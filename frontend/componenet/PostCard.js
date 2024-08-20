import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment'

const PostCard = ({posts}) => {
  return (
    <View >
      <Text style={styles.heading}>Total Posts{"  "}{ posts?.length} </Text>
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
    </View>
  )
}
const styles = StyleSheet.create({
    heading: {
      color: 'green',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    card: {
      width: '95%',
      backgroundColor: '#f8f8f8',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      alignSelf: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#333',
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginBottom: 10,
    },
    userInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    userName: {
      fontSize: 16,
      color: '#888',
      fontWeight: '500',
    },
    date: {
      fontSize: 14,
      color: '#aaa',
    },
  });
  

  
export default PostCard