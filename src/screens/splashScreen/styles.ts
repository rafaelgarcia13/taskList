import styled from 'styled-components/native';
import { fontFamily } from '../../assets/fonts';

const Background = styled.View`
  background: black;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 22px;
  color: white;
  font-family: ${fontFamily.bold}
  margin-left: 6px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export { Background, Title, Wrapper };
