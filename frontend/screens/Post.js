import { View, Text,StyleSheet, TextInput ,ScrollView} from 'react-native'
import React from 'react'
import FootMenu from '../componenet/Menus/FootMenu'

const Post = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{alignItems:"center"}}>
                <Text style={styles.heading}>create a post</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="add post title"
                    placeholderTextColor={"gray"}  >
                    
                </TextInput>
                <TextInput
                    style={styles.inputBox}
                    placeholder="add post description"
                    placeholderTextColor={"gray"}
                    multiline={true}
                    numberOfLines={6}
                      >
                    
                </TextInput>
            </View>
            </ScrollView>
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
    },
    heading:{
   
        fontSize:25,
        fontWeight:'bold',
        textTransform:"uppercase"
    },
    inputBox:{
        backgroundColor:"#ffffff",
        textAlign:'top',
        marginTop:10,
        paddingTop:10,
        width:320,
        marginTop:30,
        fontSize:16,
        paddingLeft:15,
        borderColor:"gray",
        borderWidth:1,
    }
})
export default Post