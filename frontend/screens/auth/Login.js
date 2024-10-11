import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import InputBox from '../../componenet/Form/InputBox';
import SubmitButton from '../../componenet/Form/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Login = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post("http://192.168.1.7:8080/api/v1/auth/login",
        { email, password }
      );
      setState(data);
      alert(data && data.message);

      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      console.log("Login Data =>", { email, password });
      navigation.navigate("Home");
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem('@auth');
    console.log("local storage ==> ", data);
  };
  getLocalStorageData();

  return (
    <ImageBackground source={require('../../assets/login.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.pagetitle}>Login</Text>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <InputBox 
            value={email} 
            setValue={setEmail}
            inputTitle={'Email'}
          />
          <InputBox 
            value={password} 
            setValue={setPassword}
            inputTitle={'Password'} 
            secureTextEntry={true}
          />
        </View>

        <SubmitButton btnTitle="Login" loading={loading} handleSubmit={handleSubmit} />
        <Text style={styles.Linktext}>Not a User? Please{' '}
          <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Register</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 255, 0.4)', // Blue transparent overlay
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagetitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "#ffffff",
    backgroundColor: 'rgba(0, 0, 255, 0.6)', // Similar blue transparent background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Rounded corners to make it look like a cart or box
  },
  Linktext: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: 20,
  },
  link: {
    color: "#ff0000",
    fontWeight: 'bold',
  }
});


export default Login;
