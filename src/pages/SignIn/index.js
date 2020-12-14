import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native'
import { useNavigation} from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth';

import * as Styled from './styles';

export default function SignIn() {
  const navigation = useNavigation();
 
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const { signIn, loadingAuth} = useContext(AuthContext);


  function handleLogin(){
   signIn(email, password);
  }


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
        secureTextEntry={true}
        />
       </Styled.AreaInput>
     
       <Styled.SubmitButton onPress={handleLogin}>
         {
           loadingAuth ?(
             <ActivityIndicator size={20} color="#fff"/>
           ) : (
             <Styled.SubmitText>Acessar</Styled.SubmitText>
           )
         }
       </Styled.SubmitButton>

       <Styled.Link onPress={() => navigation.navigate('SignUp')}>
         <Styled.LinkText>Crie sua conta!</Styled.LinkText>
       </Styled.Link>
     
     </Styled.Container>
   </Styled.Background>
  );
}