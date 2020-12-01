import React, {useState} from 'react';
import { Platform } from 'react-native'
import { useNavigation} from '@react-navigation/native'

import * as Styled from './styles';

export default function SignIn() {
  const navigation = useNavigation();
 
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');


  return (
   <Styled.Background>
     <Styled.Container 
     behavior={Platform.OS === 'ios' ? 'padding' : ''}
     enabled>
       <Styled.Logo source={require('../../assets/Logo.png')}/>

       <Styled.AreaInput>
        <Styled.Input
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)} 
        />
       </Styled.AreaInput>

       <Styled.AreaInput>
        <Styled.Input
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
        />
       </Styled.AreaInput>
     
       <Styled.SubmitButton>
        <Styled.SubmitText>Acessar</Styled.SubmitText>
       </Styled.SubmitButton>

       <Styled.Link onPress={() => navigation.navigate('SignUp')}>
         <Styled.LinkText>Crie sua conta!</Styled.LinkText>
       </Styled.Link>
     
     </Styled.Container>
   </Styled.Background>
  );
}