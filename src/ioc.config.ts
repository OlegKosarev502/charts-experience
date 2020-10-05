import 'reflect-metadata'; // required by inversify
import { Container } from 'inversify';
import { ThemeService } from 'services/theme/theme';
import {
  IThemeService,
  themeServiceToken,
} from 'services/theme/theme.interfaces';

export const container = new Container();

container
  .bind<IThemeService>(themeServiceToken)
  .to(ThemeService)
  .inSingletonScope();
