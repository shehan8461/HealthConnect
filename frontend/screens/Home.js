import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FootMenu from '../componenet/Menus/FootMenu'
import {PostContext} from '../context/postContext'

const Home = () => {
  
    const [posts]=useContext(PostContext)
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>{JSON.stringify(posts,null,4)}</Text>
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

export default Home