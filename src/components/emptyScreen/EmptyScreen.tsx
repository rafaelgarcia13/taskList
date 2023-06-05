import React from 'react';
import { SadFace } from '../../assets/images/svg/SadFace';
import { Container, Message } from './styles';

interface IEmptyScreenProps {
  message: string;
}

const EmptyScreen: React.FC<IEmptyScreenProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
      <SadFace width={40} height={40} />
    </Container>
  );
};

export { EmptyScreen };
