import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native';
import FootMenu from '../componenet/Menus/FootMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { firebase } from './config';
import * as ImagePicker from 'expo-image-picker';

const Post = ({ navigation }) => {
    const [posts, setPosts] = useState(" ");
    const [userId, setUserId] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [contact, setContact] = useState('');
    const [specialIndustries, setSpecialIndustries] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        setImage(source);
    };

    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        var ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await ref;
        } catch (e) {
            console.log(e);
        }
        setUploading(false);
        Alert.alert('Photo uploading..!!');
        setImage(null);
    };

    const handlePost = async () => {
        try {
            setLoading(true);
            if (!userId || !serviceType || !bookingDate || !contact || !specialIndustries) {
                alert('Please fill all fields');
                setLoading(false);
                return;
            }
            const { data } = await axios.post("/posts/create-post", { userId, serviceType, bookingDate, contact, specialIndustries });
            setLoading(false);
            setPosts([...posts, data?.post]);
            alert(data?.message);
            navigation.navigate('Myposts');
        } catch (error) {
            alert(error.response?.data?.message || error.message);
            setLoading(false);
        }
    };

    return (
        <ImageBackground source={require('../assets/post.jpg')} style={styles.background}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.heading}>Booking Now</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Add UserId"
                            placeholderTextColor="gray"
                            value={userId}
                            onChangeText={setUserId}
                        />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Add ServiceType"
                            placeholderTextColor="gray"
                            value={serviceType}
                            onChangeText={setServiceType}
                        />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Add BookingDate"
                            placeholderTextColor="gray"
                            value={bookingDate}
                            onChangeText={setBookingDate}
                        />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Add Contact"
                            placeholderTextColor="gray"
                            value={contact}
                            onChangeText={setContact}
                        />
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Add SpecialIndustries"
                            placeholderTextColor="gray"
                            value={specialIndustries}
                            onChangeText={setSpecialIndustries}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
                            <Text style={styles.postTextBtn}>
                                <FontAwesome5 name="plus-square" size={18} color="white" />{' '}
                                {loading ? 'Please wait...' : ' Booking Confirm'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <FootMenu />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ensure the background image covers the whole screen
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for contrast
        borderRadius: 15,
        margin: 10,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff6347',
        marginBottom: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ff6347',
        paddingBottom: 10,
        letterSpacing: 1.5,
    },
    inputBox: {
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        fontSize: 16,
        color: '#333',
        borderColor: '#ff6347',
        borderWidth: 2,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    postbtn: {
        backgroundColor: '#ff6347',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    postTextBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
});

export default Post;
