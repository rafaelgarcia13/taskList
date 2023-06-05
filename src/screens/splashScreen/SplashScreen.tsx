import React from 'react';
import { ToDoList } from '../../assets/images/svg/ToDoList';
import { Background, Title, Wrapper } from './styles';

const SplashScreen: React.FC = () => {
  return (
    <Background>
      <Wrapper>
        <ToDoList />
        <Title>App Lista de Tarefas</Title>
      </Wrapper>
    </Background>
  );
};

export { SplashScreen };
