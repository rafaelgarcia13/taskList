import { IThemeModel, ThemesIds } from './themeModel';

const lightTheme: IThemeModel = {
  id: ThemesIds.light,

  colors: {
    primary: '#AE1A5B',
    secondary: '#F19EB9',
    tertiary: '#FFD9E0',
    success: '#1eff00',
    error: '#ff0000',
    background: '#CFD8DC',
    text: '#000000',
    svgPrimary: '#000000',
    reverseColor: '#37474F',
    disabled: '#BDBDBD',
    completed: '#0900FF',
  },
};

export { lightTheme };
