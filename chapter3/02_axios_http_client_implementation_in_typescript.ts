import axios, { AxiosRequestConfig } from 'axios';

export class AxiosHttpClient implements HttpClient {
  async get<T>(url: string, options?: HttpOptions): Promise<T> {
    const config = this.createConfig(options);
    const response = await axios.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, body: any, options?: HttpOptions): Promise<T> {
    const config = this.createConfig(options);
    const response = await axios.post<T>(url, body, config);
    return response.data;
  }

  async put<T>(url: string, body: any, options?: HttpOptions): Promise<T> {
    const config = this.createConfig(options);
    const response = await axios.put<T>(url, body, config);
    return response.data;
  }

  async delete<T>(url: string, options?: HttpOptions): Promise<T> {
    const config = this.createConfig(options);
    const response = await axios.delete<T>(url, config);
    return response.data;
  }

  private createConfig(options?: HttpOptions): AxiosRequestConfig {
    const config: AxiosRequestConfig = {};
    if (options?.headers) {
      config.headers = options.headers;
    }
    return config;
  }
}