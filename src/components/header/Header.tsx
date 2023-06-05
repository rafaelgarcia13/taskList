import React from 'react';
import { Profile } from '../../assets/images/svg/Profile';
import { SwitchButton } from '../switchButton/SwitchButton';
import { useTheme } from 'styled-components';
import { useStore } from '../../store/useStore';

import {
  Container,
  IconsWrapper,
  LogoutText,
  TouchableOpacity,
  UserContainer,
  UserName,
} from './styles';
import { ThemesIds } from '../../styles/themes/themeModel';
import { darkTheme } from '../../styles/themes/dark';
import { lightTheme } from '../../styles/themes/light';
import { Logout } from '../../assets/images/svg/Logout';
import { userInfoKey } from '../../lib/localStorage/localStorageKeys';
import AsyncStorageFacade from '../../lib/localStorage/AsyncStorageFacade';

const Header: React.FC = () => {
  const theme = useTheme();
  const setTheme = useStore(({ setTheme }) => setTheme);
  const saveUserName = useStore(({ saveUserName }) => saveUserName);
  const userName = useStore(({ userName }) => userName);

  const toggleTheme = () => {
    setTheme(theme.id === ThemesIds.dark ? lightTheme : darkTheme);
  };

  const handleLogout = async () => {
    await AsyncStorageFacade.setItem<string>(userInfoKey, '');
    saveUserName('');
  };

  return (
    <Container>
      <UserContainer>
        <Profile fill={theme.colors.svgPrimary} width={32} height={32} />
        <UserName numberOfLines={1}>{userName}</UserName>
      </UserContainer>
      <IconsWrapper>
        <SwitchButton isChecked={theme.id === ThemesIds.dark} onPress={toggleTheme} />
        <TouchableOpacity onPress={handleLogout}>
          <Logout width={32} height={32} fill={theme.colors.svgPrimary} />
          <LogoutText>Sair</LogoutText>
        </TouchableOpacity>
      </IconsWrapper>
    </Container>
  );
};

export { Header };
