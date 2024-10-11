import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import moment from 'moment';

const PostCard = ({ posts }) => {
  return (
   
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
  
  );
};

const styles = StyleSheet.create({
 
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(10, 25, 47, 1)', // Dark blue background with full opacity
  },
  heading: {
    color: '#ffebcd', // Soft beige color for better contrast against the dark blue
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(0, 102, 204, 0.85)', // Darker blue with transparency for the card background
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0f8ff', // AliceBlue for a subtle light text effect
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  specialization: {
    fontSize: 18,
    color: '#add8e6', // Light blue for specialization text
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc', // Light gray border for the separator
    paddingTop: 15,
  },
  userName: {
    fontSize: 16,
    color: '#ffffff', // Pure white for the username
    fontStyle: 'italic',
  },
  date: {
    fontSize: 14,
    color: '#f0f8ff', // Light blue color for date text
  },

});




export default PostCard;
