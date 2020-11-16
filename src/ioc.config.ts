import 'reflect-metadata'; // required by inversify
import { Container } from 'inversify';
import { ThemeService } from 'services/theme/theme';
import {
  IThemeService,
  themeServiceToken,
} from 'services/theme/theme.interfaces';
import { AuthService } from 'services/auth/auth';
import { IAuthService, authServiceToken } from 'services/auth/auth.interfaces';

export const container = new Container();

container
  .bind<IThemeService>(themeServiceToken)
  .to(ThemeService)
  .inSingletonScope();

container
  .bind<IAuthService>(authServiceToken)
  .to(AuthService)
  .inSingletonScope();
