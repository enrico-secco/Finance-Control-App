import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native'
import Header from '../../components/Header';

import { AuthContext} from '../../contexts/auth'

import * as Styled from './styles'

export default function Profile() {
 const navigation = useNavigation();

 const { user, signOut } = useContext(AuthContext);

 return (
  <Styled.Container>
      <Header/>
      <Styled.Nome>
          {user && user.nome}
      </Styled.Nome>

      <Styled.NewLink onPress={() => { navigation.navigate('Registrar')}}>
          <Styled.NewText>Registrar gastos</Styled.NewText>
      </Styled.NewLink>




      <Styled.Logout onPress={() => signOut()}>
          <Styled.LogoutText> LogOut</Styled.LogoutText>
      </Styled.Logout>
  </Styled.Container>
  );
}