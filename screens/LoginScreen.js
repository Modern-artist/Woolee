import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import logo from '../assets/logo.png';
import { useNavigation } from "@react-navigation/native"


const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />

        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.subHeaderText}>Login to your account</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Id</Text>
            <TextInput style={styles.input} placeholder='Email' />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry />
          </View>
          <Pressable style={styles.regBtn}>
            <Text style={styles.btnText}>Login now</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Signup")} style={styles.loginDir}>
            <Text style={styles.loginText}>Don't have an account? <Text style={{ fontWeight: '700' }}>Sign up</Text></Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
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
    paddingTop:40,
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