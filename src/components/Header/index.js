import React from 'react';
import { View } from 'react-native';
import {useNavigation} from "@react-navigation/native"

import Icon from '@expo/vector-icons/Feather'

import * as Styled from './styles'

export default function Header() {

    const navigation = useNavigation();

 return (
   <Styled.Container>
       <Styled.ButtonMenu onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" color="#fff" size={35}/>   
       </Styled.ButtonMenu>
   </Styled.Container>
  );
}