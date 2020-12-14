import React from 'react';
import { Picker as RNPickerSelect} from '@react-native-community/picker'
import * as Styled from './styles'

export default function Picker({ onChange, tipo}) {
 return (
   <Styled.PickerView>
       <RNPickerSelect
       style={{
           width: '100%'
        }}
        placeholder={{
            label:'Selecione o Tipo',
            color: '#222',
            value: null
        }}
        selectedValue={tipo}
        onValueChange={ (valor) => onChange(valor) }
       >
           <RNPickerSelect.Item label="Receita" value="receita"/>
           <RNPickerSelect.Item label="Despesa" value="despesa"/>
        </RNPickerSelect>
   </Styled.PickerView>
  );
}