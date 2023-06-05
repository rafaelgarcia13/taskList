import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { fontFamily } from '../../assets/fonts';

interface IContainerProps {
  isError: boolean;
}

const Container = styled(Animated.View)<IContainerProps>`
  width: 100%;
  min-height: 50px;
  background-color: ${(props) =>
    props.isError ? props.theme.colors.error : props.theme.colors.success};
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;

const Message = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${fontFamily.regular}
  margin-left: 6px;
`;

export { Container, Message };
