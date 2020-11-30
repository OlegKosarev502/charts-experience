import { injectable, inject } from 'inversify';
import { observable, action, computed } from 'mobx';

import {
  IAuthService,
  LoginInfo,
  SignUpInfo,
} from 'services/auth/auth.interfaces';
import {
  IRequestService,
  requestServiceToken,
} from 'services/request/request.interfaces';

@injectable()
export class AuthService implements IAuthService {
  private readonly requestService: IRequestService;

  private readonly tokenKey: string = 'authToken';

  @observable
  public token: string | null = null;

  constructor(@inject(requestServiceToken) requestService: IRequestService) {
    this.requestService = requestService;

    this.token = localStorage.getItem(this.tokenKey);
  }

  @computed
  public get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  private async sendLogInRequest(data: LoginInfo) {
    return await this.requestService.sendRequest('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  private async sendSignUpRequest(data: SignUpInfo) {
    return await this.requestService.sendRequest(
      'http://localhost:5000/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
  }

  @action
  public logIn(data: LoginInfo): Promise<unknown> {
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.sendLogInRequest(data).then((data: any) => {
        const token = data.token;

        if (token) {
          this.token = token;
          localStorage.setItem(this.tokenKey, token);
        }

        resolve();
      });
    });
  }

  @action
  public logOut = (): void => {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  };

  public signUp(data: SignUpInfo): Promise<unknown> {
    return new Promise((resolve) => {
      this.sendSignUpRequest(data).then(() => resolve());
    });
  }
}
