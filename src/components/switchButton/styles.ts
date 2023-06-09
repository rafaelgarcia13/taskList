import styled from 'styled-components/native';
import { Animated } from 'react-native';

interface ISwitchButtonStyleProps {
  isChecked: boolean;
}

export const Container = styled.TouchableOpacity<ISwitchButtonStyleProps>`
  height: 24px;
  width: 70px;
  border: 1px solid grey;
  border-radius: 12px;
  justify-content: center;
  position: relative;
  background-color: white;
`;

export const Circle = styled(Animated.View)<ISwitchButtonStyleProps>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.reverseColor};
`;
