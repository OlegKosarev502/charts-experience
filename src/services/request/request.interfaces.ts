export interface IRequestService {
  sendRequest(url: string, params: RequestInit): Promise<unknown>;
}

export const requestServiceToken = Symbol('RequestService');
