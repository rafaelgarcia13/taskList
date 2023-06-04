import 'styled-components';
import { ThemesIds } from '../src/styles/themes/themeModel';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: ThemesIds;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      success: string;
      error: string;
      background: string;
      text: string;
      svgPrimary: string;
    };
  }
}
