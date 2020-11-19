export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignInInfo {
  name: string;
  email: string;
  password: string;
}

export interface IAuthService {
  isAuthenticated: boolean;
  logIn(data: LoginInfo): Promise<unknown>;
  logOut(): void;
  signIn(data: SignInInfo): Promise<unknown>;
}

export const authServiceToken = Symbol('AuthService');
