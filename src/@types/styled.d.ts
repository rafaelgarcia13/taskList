import 'styled-components';

import { IThemeModel } from '../styles/themes/themeModel';

declare module 'styled-components' {
  export type DefaultTheme = IThemeModel;
}
