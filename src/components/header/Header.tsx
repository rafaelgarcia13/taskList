import React from 'react';
import { Profile } from '../../assets/images/svg/Profile';
import { SwitchButton } from '../switchButton/SwitchButton';
import { useTheme } from 'styled-components';
import { useStore } from '../../store/useStore';

import { Container, UserContainer, UserName } from './styles';
import { ThemesIds } from '../../styles/themes/themeModel';
import { darkTheme } from '../../styles/themes/dark';
import { lightTheme } from '../../styles/themes/light';

const Header: React.FC = () => {
  const theme = useTheme();
  const setTheme = useStore(({ setTheme }) => setTheme);
  const userName = useStore(({ userName }) => userName);

  const toggleTheme = () => {
    setTheme(theme.id === ThemesIds.dark ? lightTheme : darkTheme);
  };

  return (
    <Container>
      <UserContainer>
        <Profile fill={theme.colors.svgPrimary} />
        <UserName>{userName}</UserName>
      </UserContainer>
      <SwitchButton isChecked={theme.id === ThemesIds.dark} onPress={toggleTheme} />
    </Container>
  );
};

export { Header };
