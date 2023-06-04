import styled from 'styled-components/native';
import { fontFamily } from '../../../../assets/fonts';

const Container = styled.View`
  padding: 8px 20px;
  border-radius: 40px;
  border: 1px solid;
  background-color: white;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

const Title = styled.Text`
  font-size: 16px;
  color: black;
  margin-right: 8px;
  font-family: ${fontFamily.medium};
`;

const IconsView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const TitleView = styled.View`
  width: 75%;
`;

export { Container, Title, IconsView, TitleView };
