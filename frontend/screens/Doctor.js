import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FootMenu from '../componenet/Menus/FootMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PostContext } from '../context/postContext';
import axios from 'axios';

const Doctor = ({ navigation }) => {
    //global state
    const[posts,setPosts]=useContext(PostContext)

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
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.heading}>Create a Doctor Shedule</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Doctor Name"
                        placeholderTextColor="gray"
                        value={name}
                        onChangeText={(text) => setname(text)}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add specialization of Doctor"
                        placeholderTextColor="gray"
                        multiline={true}
                        value={specialization}
                        onChangeText={(text) => setspecialization(text)}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.postbtn} onPress={handlePost}>
                        <Text style={styles.postTextBtn}>
                            <FontAwesome5 name="plus-square" size={18} color="white" />{' '}
                            {loading ? 'Please wait...' : 'Create Doctor Shedule'}
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
        margin: 10,
        justifyContent: 'space-between',
        marginTop: 40,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    inputBox: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        paddingTop: 10,
        width: 320,
        fontSize: 16,
        paddingLeft: 15,
        borderColor: 'gray',
        borderWidth: 1,
    },
    postbtn: {
        backgroundColor: 'black',
        width: 300,
        marginTop: 30,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postTextBtn: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Doctor;
