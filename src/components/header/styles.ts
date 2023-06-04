import styled from 'styled-components/native';
import { fontFamily } from '../../assets/fonts';

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px;
`;

const UserName = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${fontFamily.bold}
  margin-left: 6px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export { Container, UserName, UserContainer };
