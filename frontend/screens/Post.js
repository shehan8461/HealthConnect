import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FootMenu from '../componenet/Menus/FootMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PostContext } from '../context/postContext';
import axios from 'axios';

const Post = ({ navigation }) => {
    //global state
    const[posts,setPosts]=useState(" ")

    const [userId, setuserId] = useState([]);
    const [serviceType, setserviceType] = useState([]);
    const [bookingDate, setbookingDate] = useState([]);
    const [contact, setcontact] = useState([]);
    const [specialIndustries, setspecialIndustries] = useState([]);
   
    const [loading, setLoading] = useState(false);

    const handlePost = async () => {
        try {
            setLoading(true);
            if (!userId) {
                alert('Please add post userId');
                setLoading(false);
                return;
            }
            if (!serviceType) {
                alert('Please add post serviceType');
                setLoading(false);
                return;
            }
            if (!bookingDate) {
                alert('Please add post bookingDate');
                setLoading(false);
                return;
            }
            if (!contact) {
                alert('Please add post contact');
                setLoading(false);
                return;
            }
            if (!specialIndustries) {
                alert('Please add post specialIndustries');
                setLoading(false);
                return;
            }

            const { data } = await axios.post("/posts/create-post", { userId, serviceType,bookingDate,contact,specialIndustries });
            setLoading(false);
            setPosts([...posts, data?.post]);
            alert(data?.message);
            navigation.navigate('Myposts');
        } catch (error) {
            alert(error.response?.data?.message || error.message);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.heading}>Booking Now</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add UserId "
                        placeholderTextColor="gray"
                        value={userId}
                        onChangeText={(text) => setuserId(text)}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add ServiceType"
                        placeholderTextColor="gray"
                        value={serviceType}
                        onChangeText={(text) => setserviceType(text)}
                    />
                     <TextInput
                        style={styles.inputBox}
                        placeholder="Add BookingDate"
                        placeholderTextColor="gray"
                        value={bookingDate}
                        onChangeText={(text) => setbookingDate(text)}
                    />
                     <TextInput
                        style={styles.inputBox}
                        placeholder="Add Contact"
                        placeholderTextColor="gray"
                        value={contact}
                        onChangeText={(text) => setcontact(text)}
                    />
                     <TextInput
                        style={styles.inputBox}
                        placeholder="Add SpecialIndustries"
                        placeholderTextColor="gray"
                        value={specialIndustries}
                        onChangeText={(text) => setspecialIndustries(text)}
                    />

                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
                        <Text style={styles.postTextBtn}>
                            <FontAwesome5 name="plus-square" size={18} color="white" />{' '}
                            {loading ? 'Please wait...' : 'Create Post'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <FootMenu />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    inputBox: {
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        borderColor: '#ddd',
        borderWidth: 1,
        elevation: 3,  // Adding shadow for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },  // Shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    postbtn: {
        backgroundColor: '#007BFF',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        elevation: 5,  // Adding shadow for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },  // Shadow for iOS
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    postTextBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});


export default Post;