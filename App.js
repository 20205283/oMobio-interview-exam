// import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';

// import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return <LoginScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
