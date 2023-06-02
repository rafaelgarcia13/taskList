enum ThemesIds {
  'dark' = 0,
  'light',
}

type IThemeModel = {
  id: ThemesIds;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    success: string;
    error: string;
    background: string;
    text: string;
  };
};

export type { IThemeModel };
export { ThemesIds };
