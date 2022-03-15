
import { ApiGatewayInterface } from './api.gateway.interface';

export default class ApiGateway implements ApiGatewayInterface {
  constructor(private baseUrl: string) {}

  get(url: string): Promise<any> {
    const fetchUrl = `${this.baseUrl}/${url}`;

    console.log(`calling ${fetchUrl}`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchUrl);
      }, 1000);
    });
  }
}