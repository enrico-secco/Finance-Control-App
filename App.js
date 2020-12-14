import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth'

import Routes from './src/routes';

console.disableYellowBox = true;

export default function App() {
  
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313"  style="light" translucent={true}/>
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


