import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FootMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Home")}>
              <FontAwesome5 
                  name="home" 
                  style={styles.iconsStyle}
                  color={route.name === "Home" ? styles.activeIcon.color : '#333'} // Change color based on active route
              />
              <Text style={styles.textStyle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Post")}>
              <FontAwesome5 
                  name="plus-square" 
                  style={styles.iconsStyle}
                  color={route.name === "Post" ? styles.activeIcon.color : '#333'}
              />
              <Text style={styles.textStyle}>Post</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Myposts")}>
              <FontAwesome5 
                  name="list" 
                  style={styles.iconsStyle}
                  color={route.name === "Myposts" ? styles.activeIcon.color : '#333'} 
              />
              <Text style={styles.textStyle}>My Posts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Account")}>
              <FontAwesome5 
                  name="user" 
                  style={styles.iconsStyle}
                  color={route.name === "Account" ? styles.activeIcon.color : '#333'} 
              />
              <Text style={styles.textStyle}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Doctor")}>
              <FontAwesome5 
                  name="user-md" 
                  style={styles.iconsStyle}
                  color={route.name === "Doctor" ? styles.activeIcon.color : '#333'} 
              />
              <Text style={styles.textStyle}>Doctor</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      margin: 10,
      justifyContent: "space-around", // Use space-around for equal spacing
      paddingVertical: 10, // Add vertical padding
      backgroundColor: '#f8f8ff',
      // Light background for the footer
      borderRadius: 10, // Rounded corners
      elevation: 5, // Shadow effect for Android
      shadowColor: '#000', // Shadow color for iOS
      shadowOffset: { width: 0, height: 2 }, // Shadow offset
      shadowOpacity: 0.1, // Shadow opacity
      shadowRadius: 5, // Shadow blur radius
  },
  touchable: {
      flex: 1, // Make each item take equal space
      alignItems: 'center', // Center items
      paddingVertical: 7, // Add padding for touchable area
      backgroundColor: 'transparent', // No background on touchable
      borderRadius: 5, // Rounded corners for touchable
  },
  iconsStyle: {
      marginBottom: 0, // Space between icon and text
      alignSelf: "center",
      fontSize: 25,
  },
  textStyle: {
      color: '#333', // Dark text color for visibility
      fontSize: 13, // Slightly larger font size
      textAlign: 'center', // Center text
  },
  activeIcon: {
      color: 'orange', // Active color for the selected icon
  },
});

export default FootMenu