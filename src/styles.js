import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
flex: 1;

padding-top: ${0 + getStatusBarHeight()}px;
`;

export const Titulo = styled.Text`
color:#000;
font-size: 25px;
`;