import React from 'react';
import { StatusBar } from 'react-native';

import { IThemeModel, ThemesIds } from '../../styles/themes/themeModel';

interface IStatusBarProps {
  theme: IThemeModel;
}

const StatusBarStyled: React.FC<IStatusBarProps> = ({ theme }) => {
  return (
    <StatusBar
      barStyle={theme.id === ThemesIds.dark ? 'light-content' : 'dark-content'}
      backgroundColor={theme.colors.background}
    />
  );
};

export { StatusBarStyled };
