import styled from 'styled-components/native'

import {getStatusBarHeight} from 'react-native-status-bar-height';


export const Container = styled.View`
flex: 1;
background: #131313;
align-items: center;
margin-top: ${getStatusBarHeight()};
`

export const Nome = styled.Text`
text-align:center;
font-size: 28px;
margin-top:25px;
margin-bottom:25px;
color: #fff;
`

export const NewLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #00b94a;
width: 90%;
height: 45px;
border-radius: 10px;
margin-bottom: 10px;
`

export const NewText = styled.Text`
font-size: 18px;
color:#fff;
font-weight: bold;
`

export const Logout = styled.TouchableOpacity`
justify-content: center;
align-items: center;
border: 1px solid #c62c36;
width: 90%;
height: 45px;
border-radius: 10px;
margin-bottom: 10px;
`

export const LogoutText = styled.Text`
font-size: 18px;
color:#c62c36;
font-weight: bold;
`