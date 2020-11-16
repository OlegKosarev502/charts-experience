import { injectable } from 'inversify';
import { observable, action, computed } from 'mobx';

import { IAuthService } from 'services/auth/auth.interfaces';

interface LoginInfo {
  email: string;
  password: string;
}

@injectable()
export class AuthService implements IAuthService {
  private token: string | null = null;

  @observable
  private isAuthenticationPassed = false;

  @computed
  public get isAuthenticated(): boolean {
    return this.isAuthenticationPassed;
  }

  @action
  public setIsAuthenticated(value: boolean): void {
    this.isAuthenticationPassed = value;
  }

  private async sendLogInRequest(data: LoginInfo) {
    const response = await fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  @action
  public logIn(data: LoginInfo): Promise<unknown> {
    return new Promise((resolve) => {
      this.sendLogInRequest(data).then((data) => {
        const token = data.token;

        if (token) {
          this.token = token;
          this.isAuthenticationPassed = true;
        }

        resolve();
      });
    });
  }
}
