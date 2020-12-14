import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import { format } from 'date-fns';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import Picker from '../../components/Picker';

import * as Styled from './styles';

export default function New() {
  const navigation = useNavigation();
  
  const [valor,setValor] = useState('');
  const [tipo,setTipo] = useState('receita');
  const { user: usuario } = useContext(AuthContext);

  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){ //parseFloat() -> para converter para float, porque no input recebe como String.
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text:'Cancelar',
          style:'cancel'
        },
        {
          text:'Confirmar',
          onPress: () => handleAdd()
        }
      ]
    )
    
  }


  async function handleAdd(){
    let uid = usuario.uid; //Fazendo por requisição firebase deu erro de uid null, por causa de falha na requisição.

    let key = await firebase.database().ref('historico').child(uid).push().key; //gerando chave aleatória.
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    //Atualizar saldo
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);

    });
    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Home');

  }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>  
   {/* Para se clicar fora da tela, fechar o teclado. IOS não possui botão de voltar  */}
   <Styled.Background>
     <Header/>

     <SafeAreaView style={{ alignItems:"center" }}>
       <Styled.Input
       placeholder="Valor Desejado"
       keyboardType="numeric"
       returnKeyType="next" /*Para o botão passar para o próximo campo ao invés de enviar */
       onSubmitEditing={() => Keyboard.dismiss()}
       value={valor}
       onChangeText={(text) => setValor(text) }
       />

       <Picker onChange={setTipo} tipo={tipo}/>
    
      <Styled.SubmitButton onPress={handleSubmit}>
        <Styled.SubmitText>Registrar</Styled.SubmitText>
      </Styled.SubmitButton>

     </SafeAreaView>
   </Styled.Background>
   </TouchableWithoutFeedback>
  );
}