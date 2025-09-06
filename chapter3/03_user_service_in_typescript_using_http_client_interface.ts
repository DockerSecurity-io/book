import { HttpClient } from './http-client';

export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  async getUser(id: string): Promise<User> {
    const url = `https://example.com/users/${id}`;
    const user = await this.httpClient.get<User>(url);
    return user;
  }
}