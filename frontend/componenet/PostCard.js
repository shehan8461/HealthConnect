import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import moment from 'moment';

const PostCard = ({ posts }) => {
  return (
    <ImageBackground 
      source={require('../assets/availableDoctors.jpg')} // Update the path as needed
      style={styles.background}
      resizeMode="cover" // Ensures the background covers the entire screen
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Available Doctors: {posts?.length}</Text>
        {posts?.map((post, i) => (
          <View style={styles.card} key={i}>
            <Text style={styles.title}>Doctor Name: {post?.name}</Text>
            <Text style={styles.specialization}>Specialization: {post?.specialization}</Text>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{post?.postedBy?.name}</Text>
              <Text style={styles.date}>{moment(post?.createdAt).format("DD-MM-YYYY")}</Text>
            </View>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light transparent white background
},
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text visibility
  },
  heading: {
    color: '#f0f8ff', // Lighter text (AliceBlue) for better contrast
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(143, 226, 260, 0.8)', // Light Blue (with 70% opacity) // Dark semi-transparent background
    borderRadius: 20, // Soft rounded corners
    padding: 25,
    marginVertical: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',// Lighter white text for contrast
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  specialization: {
    fontSize: 18,
    color: 'black', // Light gray text for better readability
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc', // Lighter border for a softer look
    paddingTop: 15,
  },
  userName: {
    fontSize: 16,
    color: '#ffffff', // White for user names
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    color: 'black', // Lighter gray for the date text
  },
});



export default PostCard;
