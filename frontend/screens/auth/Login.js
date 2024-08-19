import { View, Text,StyleSheet, TextInput, Alert } from 'react-native'
import React,{useState,useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import InputBox from '../../componenet/Form/InputBox'
import SubmitButton from '../../componenet/Form/SubmitButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Login = ({navigation}) => {
 const [state,setState]=useContext(AuthContext)

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [loading,setloading]=useState(false)

    const handleSubmit=async()=>{
      try{
        setloading(true)
        if(!email|| !password){
           Alert.alert("Please Fill All Fields");
          setloading(false)
          return;
        }
        setloading(false)
        const{data}=await axios.post("http://192.168.1.7:8080/api/v1/auth/login",
          {email,password}
        )
        setState(data)
        alert(data&&data.message)
   
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        console.log("Login Data =>",{email,password})
        navigation.navigate("Home")
      }catch(error){
        alert(error.response.data.message)
        setloading(false)
        console.log(error)
      }
    };
const getLocalStorageData=async()=>{
  let data=await AsyncStorage.getItem('@auth')
  console.log("local storage ==> ",data)
};
getLocalStorageData();
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Login</Text>
      <View style={{marginHorizontal:20,marginTop:20}}>
       
        <InputBox 
        value={email} setValue={setemail}
         inputTitle={'Email'}/>

        <InputBox 
        value={password} setValue={setpassword}
         inputTitle={'Password'} secureTextEntry={true}/>
         
      </View>
  
      <SubmitButton btnTitle="Login" loading={loading} handleSubmit={handleSubmit}/>
      <Text style={styles.Linktext}>Not a User Please 
        <Text style={styles.link} 
         onPress={()=>navigation.navigate("Register")}>Register</Text>{" "}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor:"#e1d5c9"
   
        
    },
    pagetitle:{
        fontWeight:'bold',
        fontSize:40,
        color:"#1e2225"
    },
    inputBox:{
        height:30,
        width:360,
        marginBottom:20,
        backgroundColor:"#ffffff",
        marginTop:10,
        borderRadius:10
    },
    Linktext:{
        textAlign:"center"
    },
    link:{
      color:"red",
    }
});


export default Login