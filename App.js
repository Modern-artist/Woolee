import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <>
    <StackNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  fontFamily: "poppins",
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
