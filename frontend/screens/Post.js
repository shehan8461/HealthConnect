import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FootMenu from '../componenet/Menus/FootMenu'

const Post = () => {
    return (
        <View style={styles.container}>
           <View style={{flex:1,justifyContent:"flex-end"}}></View>
        
          <FootMenu/>
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
export default Post