import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FootMenu = () => {

  const navigation=useNavigation()
  const route=useRoute()
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <FontAwesome5 
        name="home" 
        style={styles.iconsStyle}
        color={route.name ==="home" && "orange"}/>
      <Text>Home</Text>
    </TouchableOpacity  >

    <TouchableOpacity onPress={()=>navigation.navigate("Post")}>
    <FontAwesome5 
    name="plus-square" 
    style={styles.iconsStyle}
    color={route.name ==="Post" && "orange"}
    />
      <Text>Post</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Myposts")}>
    <FontAwesome5 
    name="list" 
    style={styles.iconsStyle}
    color={route.name ==="Myposts" && "orange"} />
      <Text>My Posts</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
    <FontAwesome5 
    name="user" 
    style={styles.iconsStyle}
    color={route.name ==="Account" && "orange"} />
      <Text>Account</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>navigation.navigate("Doctor")}>
    <FontAwesome5 
    name="user-md" 
    style={styles.iconsStyle}
    color={route.name ==="Doctor" && "orange"} />
      <Text>Doctor</Text>
    </TouchableOpacity>

    
    
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        margin:10,
        justifyContent:"space-between"
    },
    iconsStyle:{
        marginBottom:3,
        alignSelf:"center",
        fontSize:25
    }
})

export default FootMenu