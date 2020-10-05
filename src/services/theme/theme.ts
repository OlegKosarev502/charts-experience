import { injectable } from 'inversify';
import { observable, action, computed } from 'mobx';

import { IThemeService, Theme, ThemeNames } from './theme.interfaces';

@injectable()
export class ThemeService implements IThemeService {
  private readonly themeNameKey: string = 'themeName';

  @observable
  public themeName: ThemeNames = ThemeNames.Light;

  constructor() {
    const savedTheme = this.getSavedTheme();

    if (savedTheme) {
      this.themeName = savedTheme as ThemeNames;
    }
  }

  @action.bound
  public changeTheme(): void {
    const themeName =
      this.themeName === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light;

    this.saveTheme(themeName);
    this.themeName = themeName;
  }

  @computed
  public get theme(): Theme {
    return {
      colors: {
        background:
          this.themeName === ThemeNames.Light
            ? 'rgb(238, 240, 242)'
            : 'rgb(32, 37, 45)',
        text:
          this.themeName === ThemeNames.Light
            ? 'rgb(74, 74, 74)'
            : 'rgb(255, 255, 255)',
      },
    };
  }

  private getSavedTheme(): string | null {
    return localStorage.getItem(this.themeNameKey);
  }

  private saveTheme(themeName: ThemeNames): void {
    localStorage.setItem(this.themeNameKey, themeName);
  }
}
