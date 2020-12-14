import React, {useContext, useState, useEffect} from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns'

import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList'

import Icon from '@expo/vector-icons/MaterialIcons'
import DatePicker from '../../components/DatePicker';


import * as Styled from './styles';

export default function Home() {

  const [historico,setHistorico] = useState([]);
  const [saldo,setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());
  const[show, setShow] = useState(false);

  useEffect(() => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      })

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value', (snapshot) => {
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date: childItem.val().date,
          };

          setHistorico( oldArray => [...oldArray, list].reverse());
        })
      })


    }

    loadList();
  },[newDate])

  function handleDelete(data){

    //por causa de uma atualização na lib date-dns, foram feitos esses passos para a comparação correta de data.

    //Pegando data do item;
    const [diaItem, mesItem, anoItem] = data.date.split('/'); //Split para separar, a comparação depois é feita em data americana
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`); //cria uma data formatada padrão americano.

    //Pegando data de hoje; Ele pega com o horário(timezone), então do jeito que está sendo feito, é removido o horário e pega apenas o dia.
    const formatDiaHoje = format(new Date(), 'dd/mm/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`)


    if( isBefore(dateItem, dateHoje) ){
      //Se a data do registro já passou.
      alert('Não é permitido excluir registro passado!');
      return;
    }

    Alert.alert(
      'Cuidado atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [ 
        {
          text: 'Cancelar',
          style:'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSucess(data)
        }
      ]
    )

  }

  async function handleDeleteSucess(data){ //função que se confirmada, exclui do firebase
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then( async () => {
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

      await firebase.database().ref('users').child(uid)
      .child('saldo').set(saldoAtual);

    })

    .catch( (error) => {
      console.log(error)
    })
  }

  function handleShowPicker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  } 


 return (
   <Styled.Background>
     <Header/>
     <Styled.Container>
          <Styled.Nome>{user && user.nome}</Styled.Nome>
       <Styled.Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Styled.Saldo>
     </Styled.Container>


     <Styled.Area>
        <Styled.Title>Ultimas movimentações</Styled.Title>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="event" color="#FFF" size={30}  />
        </TouchableOpacity>
      </Styled.Area>

    <Styled.List
    showsVerticalScrollIndicator={false}
    data={historico}
    keyExtractor={item => item.key}
    renderItem={({item}) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}/>

    {show && (
        <DatePicker
        onClose={handleClose}
        date={newDate}
        onChange={onChange}
        />
     )}

   </Styled.Background>
  );
}