import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/logo.png';
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import LoadingScreen from './LoadingScreen';


const LoginScreen = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('https://woolee-backend-riosumit.vercel.app/api/login', formData);
      console.log('Login successful', response.data.message);
      login(response.data.user);
      setIsLoading(false)
    } catch (error) {
      console.error('Login failed', error);
      setIsLoading(false)
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <LoadingScreen />}
      {!isLoading &&
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />

        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.subHeaderText}>Login to your account</Text>
          </View>
          <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Id</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => handleChange('email', text)} // Use handleChange for email
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => handleChange('password', text)} // Use handleChange for password
            />
          </View>

          <Pressable onPress={handleSubmit} style={styles.regBtn}>
            <Text style={styles.btnText}>Login now</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Signup")} style={styles.loginDir}>
            <Text style={styles.loginText}>Don't have an account? <Text style={{ fontWeight: '700' }}>Sign up</Text></Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>}
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    gap: 20,
    paddingTop: 40,
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: 160, // Set an appropriate width
    height: 160, // Set an appropriate height
    marginBottom: 20,
  },
  keyboardAvoidingView: {
    width: '80%',
  },
  header: {
    gap: 4,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '600',
  },
  subHeaderText: {
    color: '#AAA',
    fontSize: 20,
    fontWeight: '600',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#111',
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    fontWeight: '600',
    height: 40,
    borderColor: '#D0D0D0',
    borderBottomWidth: 2,
    marginTop: 4,
    marginBottom: 8,
    fontSize: 16,
  },
  regBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 100,
    paddingVertical: 20,

  },
  btnText: {
    fontWeight: '700',
    fontSize: 20,
    color: "#ffffff"
  },
  loginText: {
    textAlign: 'center',
    margin: 12
  }
})