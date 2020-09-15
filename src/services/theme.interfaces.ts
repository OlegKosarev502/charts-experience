export enum ThemeNames {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeColors {
  background: string;
  text: string;
}

export interface Theme {
  colors: ThemeColors;
}

export interface IThemeService {
  theme: Theme;
  themeName: ThemeNames;
  changeTheme(): void;
}
