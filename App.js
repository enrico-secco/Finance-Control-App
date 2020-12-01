import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import firebase from './src/services/firebaseConnection'


import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313"  style="light" translucent={true}/>
      <Routes/>
    </NavigationContainer>
  );
}


