import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import FootMenu from '../componenet/Menus/FootMenu';

const Account = () => {
    const [state, setState] = useContext(AuthContext);
    const { user,token } = state;
    const [name, setName] = useState(user?.name);
    const [password, setPassword] = useState(user?.password);
    const [email] = useState(user?.email);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const { data } = await axios.put("/auth/update-user", {
                name, email, password
            }
            );
            setLoading(false);
            const updateedUser = data.updateedUser;
            setState({ ...state, user: updateedUser });
            alert(data && data.message);
        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png' }}
                        style={{ height: 200, width: 200, borderRadius: 100 }} />
                </View>
                <Text style={styles.warningText}>Currently You can Only update your name and password*</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Name</Text>
                    <TextInput style={styles.inputBox} value={name} onChangeText={(text) => setName(text)} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput style={styles.inputBox} value={email} editable={false} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput style={styles.inputBox} value={password}  onChangeText={(text) => setPassword(text)} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>Role</Text>
                    <TextInput style={styles.inputBox} value={state?.user.role} editable={false} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                        <Text style={styles.updateButtonText}>{loading ? "Please wait..." : "Update Profile"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FootMenu />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'space-between',
        marginTop: 40,
        justifyContent: 'center',
    },
    warningText: {
        color: 'red',
        fontSize: 13,
        textAlign: 'center',
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    inputText: {
        fontWeight: "bold",
        width: 80,
        color: "gray",
    },
    inputBox: {
        width: 250,
        backgroundColor: "#ffffff",
        marginLeft: 10,
        fontSize: 16,
        paddingLeft: 20,
        borderRadius: 5,
    },
    updateButton: {
        backgroundColor: "blue",
        color: "white",
        height: 40,
        width: 250,
        borderRadius: 10,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    updateButtonText: {
        color: "#ffffff",
        fontSize: 16,
    },
});

export default Account;
