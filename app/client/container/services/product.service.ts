import { ApiGatewayInterface } from 'app/shared/api.gateway.interface';
import { ProductServiceInterface } from '../interfaces/product.service.interface';
import { UserServiceInterface } from '../interfaces/user.service.interface';

export class ProductService implements ProductServiceInterface {
  constructor(private apiGateway: ApiGatewayInterface, private userService: UserServiceInterface) {}

  getProduct(id: string): Promise<any> {
    return this.apiGateway.get(`product/${id}`);
  }

  async getUserFavourites(id: string): Promise<any> {
    const { favourites } = await this.userService.getModel(id);

    return this.apiGateway.get(`favourites/${favourites[0].product}`);
  }
}