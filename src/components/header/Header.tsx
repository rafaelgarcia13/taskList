import React from 'react';
import { Profile } from '../../assets/images/svg/Profile';

import { Container, UserName } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Profile />
      <UserName>Teste</UserName>
    </Container>
  );
};

export { Header };
