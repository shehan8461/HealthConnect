import { View, Text,StyleSheet ,Image} from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FootMenu from '../componenet/Menus/FootMenu'

const Account = () => {
    const [state]=useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Image source={{
                    uri:'https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png'
                
                }}
                   style={{height:200,width:200,borderRadius:100}}
                />
            </View>
            <Text style={styles.warningtext}>Currently You can Only update your name and password*</Text>
           <Text>Name:{state?.user.name}</Text>
           <Text>Email:{state?.user.email}</Text>
           <Text>Role:{state?.user.role}</Text>
        <View style={{flex:1,justifyContent:"flex-end"}}>
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
    },
    warningtext:{
        color:'red',
        fontSize:13,
        textAlign:'center'
    }
})

export default Account