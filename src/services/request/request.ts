import { injectable } from 'inversify';

import { IRequestService } from 'services/request/request.interfaces';

@injectable()
export class RequestService implements IRequestService {
  public async sendRequest(url: string, params: RequestInit): Promise<unknown> {
    const response = await fetch(url, params);

    const contentType = response.headers.get('content-type');
    const isJSON = contentType?.includes('application/json');

    return isJSON ? response.json() : response.text();
  }
}
