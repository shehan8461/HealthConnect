import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import FootMenu from '../componenet/Menus/FootMenu';
import axios from 'axios';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Myposts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDeletePromt = (id) => {
    Alert.alert("Attention!", "Are you sure you want to delete this post?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel pressed");
        },
      },
      {
        text: "Delete",
        onPress: () => handleDeletePost(id),
      }
    ]);
  };

  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`/posts/delete-user-posts/${id}`);
      setLoading(false);
      alert(data?.message);
      getUserPosts(); // Refresh the posts after deletion
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };

  const getUserPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/posts/get-user-posts");
      setLoading(false);
      setPosts(data?.userPosts);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts?.map((post, i) => (
          <View style={styles.card} key={i}>
            <Text style={styles.title}>UserId: {post?.userId}</Text>
            <Text style={styles.text}>Service Type: {post?.serviceType}</Text>
            <Text style={styles.text}>Booking Date: {moment(post?.bookingDate).format('DD-MM-YYYY')}</Text>
            <Text style={styles.text}>Contact: {post?.contact}</Text>
            <Text style={styles.text}>Special Industries: {post?.specialIndustries}</Text>
            <View style={styles.trashIcon}>
              <FontAwesome5
                name="trash"
                size={18}
                color="#e63946"
                onPress={() => handleDeletePromt(post?._id)}
              />
            </View>
            <Text style={styles.date}>{moment(post?.createdAt).format("DD-MM-YYYY")}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <FootMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between',
    marginTop: 40,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#2E8B57', // Sea green color for left border
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#555555',
    marginBottom: 5,
  },
  trashIcon: {
    textAlign: 'right',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
});

export default Myposts;
