export interface ApiGatewayInterface {
    get<T>(url: string): Promise<T>;
}