import { View, Text,StyleSheet, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'
import InputBox from '../../componenet/Form/InputBox'
import SubmitButton from '../../componenet/Form/SubmitButton'
import axios from "axios"

const Register = ({navigation}) => {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [loading,setloading]=useState(true)

    const handleSubmit=async()=>{
      try{
        setloading(true)
        if(!name|| !email|| !password){
           Alert.alert("Please Fill All Fields");
          setloading(false)
          return;
        }
        setloading(false)
        //backend post
        const{data}=await axios.post("http://192.168.1.6:8080/api/v1/auth/register",
          {name,email,password}
        )
        navigation.navigate("Login")
        alert(data&&data.message)
        console.log("Registered DATA =>",{name,email,password})
      }catch(error){
        alert(error.response.data.message)
        setloading(false)
        console.log(error)
      }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Register</Text>
      <View style={{marginHorizontal:20,marginTop:20}}>
        <InputBox 
        value={name} setValue={setname}
        inputTitle={'Name'}/>

        <InputBox 
        value={email} setValue={setemail}
         inputTitle={'Email'}/>

        <InputBox 
        value={password} setValue={setpassword}
         inputTitle={'Password'} secureTextEntry={true}/>
         
      </View>
      {/*<Text>{JSON.stringify({name,email,password},null,4)}</Text>*/}
      <SubmitButton btnTitle="Register" loading={loading} handleSubmit={handleSubmit}/>
      <Text style={styles.Linktext}>Already Register Please <Text style={styles.link}  
       onPress={()=>navigation.navigate("Login")}>LOGIN</Text>{" "}</Text>
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

export default Register