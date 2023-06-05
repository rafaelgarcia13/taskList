import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border: 3px solid black;
`;

const TextInputWrapper = styled.View`
  flex: 1;
  border-right-width: 1px;
  border-color: grey;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

export { Container, TouchableOpacity, TextInputWrapper };
