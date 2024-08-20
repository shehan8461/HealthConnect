import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import moment from 'moment';

const PostCard = ({ posts }) => {
  return (
    <View>
      <Text style={styles.heading}>Available Doctors: {posts?.length}</Text>
      {posts?.map((post, i) => (
        <View style={styles.card} key={i}>
          <Text style={styles.title}>Doctor Name: {post?.name}</Text>
          <Text style={styles.specialization}>Specialization: {post?.specialization}</Text>
          
          <View style={styles.userInfo}>
            <Text style={styles.userName}> {post?.postedBy?.name }</Text>
            <Text style={styles.date}>{moment(post?.createdAt).format("DD-MM-YYYY")}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#2E8B57', // Sea green color
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  specialization: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  userName: {
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default PostCard;
