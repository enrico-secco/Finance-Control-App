import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import Icon from '@expo/vector-icons/Feather'

import * as Styled from './styles'

export default function HistoricoList({ data, deleteItem}) {
 return (

<TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
   <Styled.Container>
       <Styled.Tipo>
           <Styled.IconView tipo={data.tipo}>
               <Icon 
               name={data.tipo === 'despesa' ? "arrow-down" : "arrow-up"} 
               color="#fff" 
               size={20}/>

               <Styled.TipoText>
                   {data.tipo}
               </Styled.TipoText>
           </Styled.IconView>
       </Styled.Tipo>
       <Styled.ValorText>
           R$ {data.valor}
       </Styled.ValorText>
   </Styled.Container>

</TouchableWithoutFeedback>
  );
}