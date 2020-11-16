export interface LoginInfo {
  email: string;
  password: string;
}

export interface IAuthService {
  isAuthenticated: boolean;
  setIsAuthenticated(value: boolean): void;
  logIn(data: LoginInfo): Promise<unknown>;
}

export const authServiceToken = Symbol('AuthService');
