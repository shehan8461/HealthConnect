import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmit,btnTitle,loading}) => {
  return (
    <TouchableOpacity style={styles.submitbtn} onPress={handleSubmit}>
        <Text style={styles.btntext}>{loading ?"please wait:":btnTitle}
        </Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    submitbtn:{
        backgroundColor:"black",
        height:50,
        width:280,
        marginHorizontal:25,
        borderRadius:80,
        justifyContent:"center",
        marginBottom:20,
    },
    btntext:{
            color:"#ffffff",
            textAlign:"center",
            fontSize:24,
            fontWeight:"400",
    }
})

export default SubmitButton