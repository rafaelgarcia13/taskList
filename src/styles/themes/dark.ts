import { IThemeModel, ThemesIds } from './themeModel';

const darkTheme: IThemeModel = {
  id: ThemesIds.dark,

  colors: {
    primary: '#37474F',
    secondary: '#607D88',
    tertiary: '#CFD8DC',
    success: '#1eff00',
    error: '#ff0000',
    background: '#000000',
    text: '#FFFFFF',
  },
};

export { darkTheme };
