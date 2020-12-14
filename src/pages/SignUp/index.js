import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator} from 'react-native'

import { AuthContext } from '../../contexts/auth'

import * as Styled from '../SignIn/styles';

export default function SignIn() {
 
  const [nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signUp, loadingAuth} = useContext(AuthContext);
 
  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
   <Styled.Background>
     <Styled.Container 
     behavior={Platform.OS === 'ios' ? 'padding' : ''}
     enabled>

       <Styled.AreaInput>
        <Styled.Input
        placeholder="Nome"
        autoCorrect={false}
        autoCapitalize="none"
        value={nome}
        onChangeText={(text) => setNome(text)} 
        />
       </Styled.AreaInput>

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
     
       <Styled.SubmitButton onPress={handleSignUp}>
       loadingAuth ?(
             <ActivityIndicator size={20} color="#fff"/>
           ) : (
             <Styled.SubmitText>Acessar</Styled.SubmitText>
           )
       </Styled.SubmitButton>

     
     </Styled.Container>
   </Styled.Background>
  );
}