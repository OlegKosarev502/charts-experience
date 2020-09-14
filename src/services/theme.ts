import { observable, action, computed } from 'mobx';

export enum ThemeNames {
  Light = 'light',
  Dark = 'dark',
}

class ThemeService {
  @observable
  public themeName: ThemeNames = ThemeNames.Light;

  @action.bound
  public changeTheme() {
    this.themeName =
      this.themeName === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light;
  }

  @computed
  public get theme() {
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
}

export const themeService = new ThemeService();
