import styled from 'styled-components/native';

//SafeAreaView para garantir que no IOS vai ficar com espaçamento correto da status bar.
export const Container = styled.SafeAreaView`
    
    justify-content: flex-start;
    align-items: flex-start;

    margin: 30px 0px 15px 20px;
    width: 90%;
    height: 60px;
    
`;

export const ButtonMenu = styled.TouchableWithoutFeedback`
justify-content:center;
align-items: center;
`