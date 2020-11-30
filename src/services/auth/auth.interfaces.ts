export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export interface IAuthService {
  isAuthenticated: boolean;
  logIn(data: LoginInfo): Promise<unknown>;
  logOut(): void;
  signUp(data: SignUpInfo): Promise<unknown>;
}

export const authServiceToken = Symbol('AuthService');
