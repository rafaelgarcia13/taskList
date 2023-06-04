import styled from 'styled-components/native';

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px;
`;

const UserName = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 6px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export { Container, UserName, UserContainer };
