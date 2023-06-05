import styled from 'styled-components/native';
import { fontFamily } from '../../assets/fonts';

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const Message = styled.Text`
  font-size: 22px;
  margin-vertical: 8px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${fontFamily.bold};
`;

export { Container, Message };
