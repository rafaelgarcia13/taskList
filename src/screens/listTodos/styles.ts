import styled from 'styled-components/native';

const ListContainer = styled.View`
  padding-horizontal: 16px;
  flex: 1;
`;

const Divider = styled.View`
  margin-vertical: 8px;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export { Divider, ListContainer, Container };
