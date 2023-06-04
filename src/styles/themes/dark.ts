import { IThemeModel, ThemesIds } from './themeModel';

const darkTheme: IThemeModel = {
  id: ThemesIds.dark,

  colors: {
    primary: '#37474F',
    secondary: '#607D88',
    tertiary: '#CFD8DC',
    error: '#ff0000',
    background: '#000000',
    text: '#FFFFFF',
    svgPrimary: '#FFFFFF',
    reverseColor: '#00AFFF',
    disabled: '#BDBDBD',
    completed: '#0900FF',
  },
};

export { darkTheme };
