import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background: blue;
  padding: 8px;
`;

const UserName = styled.Text`
  font-size: 16px;
  margin-left: 6px;
`;

export { Container, UserName };
