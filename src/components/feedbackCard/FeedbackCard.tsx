import React, { useRef, useEffect } from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { useStore } from '../../store/useStore';

import { Container, Message } from './styles';

const FeedbackCard: React.FC = () => {
  const { height } = useWindowDimensions();
  const { isError, message, isOpen } = useStore(({ feedbackData }) => feedbackData);
  const setFeedback = useStore(({ setFeedback }) => setFeedback);

  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isOpen ? height - 200 : height,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => setFeedback({ isError, message, isOpen: false }), 1000);
  }, [isOpen]);

  return (
    <Container isError={isError} style={{ transform: [{ translateY: translateY }] }}>
      <Message>{message}</Message>
    </Container>
  );
};

export { FeedbackCard };
