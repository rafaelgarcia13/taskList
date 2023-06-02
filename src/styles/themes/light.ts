import { IThemeModel, ThemesIds } from './themeModel';

const lightTheme: IThemeModel = {
  id: ThemesIds.light,

  colors: {
    primary: '#3392ff',
    secondary: '#91c5ff',
    tertiary: '#abeaff',
    success: '#1eff00',
    error: '#ff0000',
    background: '#EEEEEE',
    text: '#000000',
  },
};

export { lightTheme };
