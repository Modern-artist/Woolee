import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <View style={styles.container}>
          <StackNavigation />
          <StatusBar style="auto" />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
