import { IThemeModel, ThemesIds } from './themeModel';

const lightTheme: IThemeModel = {
  id: ThemesIds.light,

  colors: {
    primary: '#00AFFF',
    secondary: '#42E3FF',
    tertiary: '#FFFFFF',
    error: '#ff0000',
    background: '#CFD8DC',
    text: '#000000',
    svgPrimary: '#000000',
    reverseColor: '#37474F',
    disabled: '#BDBDBD',
    completed: '#00790A',
    black: '#000000',
  },
};

export { lightTheme };
