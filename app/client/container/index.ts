import { Container } from 'inversify';

import ApiGateway from 'app/shared/api.gateway';
import { ApiGatewayInterface } from 'app/shared/api.gateway.interface';
import { TYPES } from './types';
import { UserServiceInterface } from './interfaces/user.service.interface';
import { UserService } from './services/user.service';
import { ProductServiceInterface } from './interfaces/product.service.interface';
import { ProductService } from './services/product.service';


const appContainer = new Container();

// myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);

appContainer.bind<ApiGatewayInterface>(TYPES.ApiGateway).toConstantValue(new ApiGateway('http://container-link.ccoom'));
appContainer.bind<UserServiceInterface>(TYPES.UserService).to(UserService);
appContainer.bind<ProductServiceInterface>(TYPES.ProductService).to(ProductService);

export { appContainer };