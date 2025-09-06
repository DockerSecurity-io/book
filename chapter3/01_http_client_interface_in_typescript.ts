export interface HttpClient {
  get<T>(url: string, options?: HttpOptions): Promise<T>;
  post<T>(url: string, body: any, options?: HttpOptions): Promise<T>;
  put<T>(url: string, body: any, options?: HttpOptions): Promise<T>;
  delete<T>(url: string, options?: HttpOptions): Promise<T>;
}