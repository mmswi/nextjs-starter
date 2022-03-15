export interface ProductServiceInterface {
    getProduct(id: string): Promise<any>;

    getUserFavourites(id: string): Promise<any>;
}