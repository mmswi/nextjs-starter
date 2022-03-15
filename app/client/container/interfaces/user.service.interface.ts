export interface UserServiceInterface {
    getModel(id: string): Promise<any>;
}