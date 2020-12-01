import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color:#131313;
`;

//Próprio do RN quando abre o teclado sobe pra cima os itens para o teclado não ficar por cima do input, mandando a view um pouco pra cima.
//No android já possui esse comportamento padrão, no IOS não.
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items:center;
justify-content:center;
`;

export const Logo = styled.Image`
margin-bottom: 15px;
`;

export const AreaInput = styled.View`
flex-direction: row; //para no TextInput poder pegar o width certo.
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.2)'
})`
background: rgba(0,0,0,0.2);
width: 90%;
font-size: 18px;
color: #fff;
margin-bottom: 15px;
padding: 10px;
border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #00b94a;
width: 90%;
height: 45px;
border-radius: 8px;
margin-top: 10px;
`

export const SubmitText = styled.Text`
font-size: 20px;
color:#131313;
font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
justify-content: center;
align-items: center;
border: 1px solid #00b94a;
border-radius: 8px;
width: 90%;
height: 45px;

margin-top: 20px;

`;

export const LinkText = styled.Text`
color:rgba(255,255,255,0.7);

`;