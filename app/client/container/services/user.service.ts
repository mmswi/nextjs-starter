import { ApiGatewayInterface } from 'app/shared/api.gateway.interface';
import { UserServiceInterface } from '../interfaces/user.service.interface';

export class UserService implements UserServiceInterface {

  constructor(private apiGateway: ApiGatewayInterface) {}

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