import styled from 'styled-components/native';
import { fontFamily } from '../../assets/fonts';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px;
`;

const UserName = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${fontFamily.bold}
  margin-left: 6px;
  max-width: 83%;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconsWrapper = styled.View`
  align-items: flex-end;
`;

const TouchableOpacity = styled.TouchableOpacity`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
`;

const LogoutText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${fontFamily.bold}
  margin-left: 6px;
`;

export { Container, UserName, UserContainer, IconsWrapper, TouchableOpacity, LogoutText };
