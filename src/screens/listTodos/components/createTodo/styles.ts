import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  border: 3px solid black;
`;

const TextInput = styled.TextInput`
  width: 80%;
  background-color: white;
  border-right-width: 1px;
  border-color: grey;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export { Container, TextInput, TouchableOpacity };
