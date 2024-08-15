import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FootMenu from '../componenet/Menus/FootMenu'

const Home = () => {
    const [state]=useContext(AuthContext)
  return (
    <View style={styles.container}>
      
      <Text>{JSON.stringify(state,null,4)}</Text>
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

export default Home