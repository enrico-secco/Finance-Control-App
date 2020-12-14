import styled from 'styled-components/native';

import { getStatusBarHeight} from 'react-native-status-bar-height';

export const Background = styled.View`
    flex:1;
    background:#131313;
    margin-top: ${getStatusBarHeight()};
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#222"
})`
    height: 50px;
    width:90%;
    background: rgba(255,255,255,0.9);
    margin-top:30px;
    font-size:16px;
    border-radius: 7px;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background: #00b94a;
    border-radius:7px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:#fff;
`;
