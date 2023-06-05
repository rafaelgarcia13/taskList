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
    error: string;
    success: string;
    background: string;
    text: string;
    svgPrimary: string;
    reverseColor: string;
    disabled: string;
    completed: string;
    black: string;
  };
};

export type { IThemeModel };
export { ThemesIds };
