import styled from 'styled-components';

import { getStatusBarHeight} from 'react-native-status-bar-height';

export const Background = styled.View`
    flex:1;
    background: #131313;
    margin-top: ${getStatusBarHeight()}
`;

export const Container= styled.View`
    margin-left: 20px;
    margin-bottom: 25px;
`;

export const Nome = styled.Text`
    font-size: 18px;
    color: #fff;
    font-style: italic;
`;

export const Saldo = styled.Text`
    margin-top:5px;
    font-size: 30px;
    color:#fff;
    font-weight: bold;
`;
 
export const Title = styled.Text`
    margin-left: 5px;
    color: #00b94a;
    margin-bottom: 10px;
`

export const Area = styled.View`
    flex-direction: row;
    margin: 5px 15px;
    align-items: center;
    justify-content: space-between;
`

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color:#fff;
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
