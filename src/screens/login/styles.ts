import styled from 'styled-components/native';
import { fontFamily } from '../../assets/fonts';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
`;

interface IButtonProps {
  isDisabledButton: boolean;
}

const Button = styled.TouchableOpacity<IButtonProps>`
  background-color: ${(props) =>
    props.isDisabledButton ? props.theme.colors.disabled : props.theme.colors.black};
  height: 50px;
  width: 50%;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
  font-family: ${fontFamily.medium};
`;

export { Container, TextInput, Button, ButtonText };
