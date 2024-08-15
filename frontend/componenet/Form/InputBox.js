import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'

const InputBox = ({inputTitle,keyboardType,autoComplete,secureTextEntry=false,value,setValue}) => {
  return (
    <View>
      <Text style={styles.inputtitle}>{inputTitle}</Text>
      <TextInput style={styles.inputBox}
      
      autoCorrect={false}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={(text)=>setValue(text)} >
     
      </TextInput>
    </View>
  )
}
const styles=StyleSheet.create({
   
    inputBox:{
        height:30,
        width:360,
        marginBottom:20,
        backgroundColor:"#ffffff",
        marginTop:10,
        borderRadius:10
    },
    inputtitle:{
      fontWeight:"bold",

    }
});

export default InputBox