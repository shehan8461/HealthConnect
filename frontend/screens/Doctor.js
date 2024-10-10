import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import FootMenu from '../componenet/Menus/FootMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PostContext } from '../context/postContext';
import axios from 'axios';

const Doctor = ({ navigation }) => {
    // Global state
    const [posts, setPosts] = useState("");
    const [name, setname] = useState('');
    const [specialization, setspecialization] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePost = async () => {
        try {
            setLoading(true);
            if (!name) {
                alert('Please add post title');
                setLoading(false);
                return;
            }
            if (!specialization) {
                alert('Please add Specialization of Doctor');
                setLoading(false);
                return;
            }
            const { data } = await axios.post("/doctors/create-doctor", { name, specialization });
            setLoading(false);
            setPosts([...posts, data?.post]);
            alert(data?.message);
            navigation.navigate('Home');
        } catch (error) {
            alert(error.response?.data?.message || error.message);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <ImageBackground source={require('../assets/doctor.jpg')} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.inputContainer}>
                    {/* //<Text style={styles.heading}>Create a Doctor Schedule</Text> */}
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Doctor Name"
                        placeholderTextColor="#333" // Darker placeholder text color
                        value={name}
                        onChangeText={(text) => setname(text)}
                    />
                    
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add specialization of Doctor"
                        placeholderTextColor="#333" // Darker placeholder text color
                        multiline={true}
                        value={specialization}
                        onChangeText={(text) => setspecialization(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
                        <Text style={styles.postTextBtn}>
                            <FontAwesome5 name="plus-square" size={18} color="white" />{' '}
                            {loading ? 'Please wait...' : 'Create Doctor Schedule'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <FootMenu />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
        color: '#ffffff', // White text for better visibility on the background
        textShadowColor: '#000', // Black shadow for better readability
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        backgroundColor: 'rgba(0, 123, 255, 0.7)', // Semi-transparent blue background
        padding: 15, // Padding for better spacing
        borderRadius: 10, // Rounded corners for a softer look
        alignSelf: 'stretch', // Stretch to fill the width of the container
        textAlign: 'center', // Center align the text
        elevation: 5, // Elevation for Android
        shadowColor: '#000', // Shadow for depth
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    
    inputContainer: {
        alignItems: 'center',
        paddingBottom: 20,
        marginTop: '40%',
        width:'100%',
      // Adds space above the container for better layout
    },
    
    inputBox: {
        backgroundColor: '#ffffff', // White background for input fields
        width: '90%', // Set to 90% of the container's width for responsiveness
        padding: 15, // Increased padding for better touch target
        fontSize: 16,
        borderColor: '#007BFF', // Blue border color for an appealing look
        borderWidth: 2, // Slightly thicker border
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 2, // Vertical shadow for depth
        },
        shadowOpacity: 0.2, // Slight shadow opacity
        shadowRadius: 4, // Radius of the shadow
        elevation: 3, // Elevation for Android
        marginBottom: 15, // Space between input fields
    },
    
    buttonContainer: {
        alignItems: 'center',
        marginTop: 80,
        width: '90%',
    },
    postbtn: {
        backgroundColor: '#007BFF', // Bootstrap primary color
        width: '90%', // Responsive width
        height: 50, // Increased height for better touch area
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', // Shadow for depth
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // Elevation for Android
    },
    postTextBtn: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default Doctor;
