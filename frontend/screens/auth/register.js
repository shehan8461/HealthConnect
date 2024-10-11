import { View, Text,StyleSheet, TextInput, Alert,ImageBackground } from 'react-native'
import React,{useState} from 'react'
import InputBox from '../../componenet/Form/InputBox'
import SubmitButton from '../../componenet/Form/SubmitButton'
import axios from "axios"

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert('Please Fill All Fields');
        setLoading(false);
        return;
      }
      const { data } = await axios.post('http://192.168.1.7:8080/api/v1/auth/register', {
        name,
        email,
        password,
      });
      navigation.navigate('Login');
      Alert.alert(data && data.message);
      console.log('Registered DATA =>', { name, email, password });
    } catch (error) {
      Alert.alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
     <ImageBackground source={require('../../assets/login.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.pageTitle}>Register</Text>
        <View style={styles.inputContainer}>
          <InputBox value={name} setValue={setName} inputTitle="Name" />
          <InputBox value={email} setValue={setEmail} inputTitle="Email" />
          <InputBox value={password} setValue={setPassword} inputTitle="Password" secureTextEntry />
        </View>
        <SubmitButton btnTitle="Register" loading={loading} handleSubmit={handleSubmit} />
        <Text style={styles.linkText}>
          Already Registered? Please{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            LOGIN
          </Text>
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
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 255, 0.6)', // Similar blue transparent background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Rounded corners
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  linkText: {
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 20,
  },
  link: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

export default Register;
