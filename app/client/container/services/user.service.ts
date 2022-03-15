import { injectable, inject } from 'inversify';

import { ApiGatewayInterface } from 'app/shared/api.gateway.interface';
import { UserServiceInterface } from '../interfaces/user.service.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements UserServiceInterface {

  constructor(@inject(TYPES.ApiGateway) private apiGateway: ApiGatewayInterface) {}

  async getModel(id: string): Promise<any> {
    const user = await this.apiGateway.get(`users/${id}`);

    return {
      name      : 'Great name',
      email     : 'great@email.com',
      favourites: [{
        product: user + ' favourite 1'
      },
      {
        product: user + ' favourite 1'
      }]
    };
  }
}