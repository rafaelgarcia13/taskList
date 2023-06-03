import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import { Container, Circle } from './styles';

interface ISwitchButtonProps {
  isChecked: boolean;
  onPress: () => void;
}

const SwitchButton: React.FC<ISwitchButtonProps> = ({ isChecked, onPress }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isChecked ? 25 : -2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isChecked]);

  return (
    <Container isChecked={isChecked} onPress={onPress}>
      <Circle isChecked={isChecked} style={{ transform: [{ translateX }] }} />
    </Container>
  );
};

export { SwitchButton };
