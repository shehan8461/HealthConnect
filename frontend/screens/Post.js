import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FootMenu from '../componenet/Menus/FootMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const Post = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePost = async () => {
        try {
            setLoading(true);
            if (!title) {
                alert('Please add post title');
                setLoading(false);
                return;
            }
            if (!description) {
                alert('Please add post description');
                setLoading(false);
                return;
            }
            const { data } = await axios.post('/post/create-post', { title, description });
            setLoading(false);
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
                    <Text style={styles.heading}>Create a Post</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add post title"
                        placeholderTextColor="gray"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add post description"
                        placeholderTextColor="gray"
                        multiline={true}
                        numberOfLines={6}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
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

export default Post;
