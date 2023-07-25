// Angular modules
import { Injectable } from '@angular/core';
import { storageKeys } from '@app/constants/storage-keys';
import { ApiService } from './api.service';

@Injectable()
export class AuthService extends ApiService {
  async authenticate(email: string, password: string): Promise<boolean> {
    this.storageService.remove(storageKeys.authProfile);

    const httpClient = await this.httpClient();
    const { data } = await httpClient.post('users', { email, password });

    if (!data) return false;
    // const authResponse = new AuthResponse(data);
    this.storageService.setObject(storageKeys.authProfile, {
      token: 'TOKEN XXXXXX', // fake token
    });
    return true;
  }

  async forgotPassword(email: string): Promise<boolean> {
    const httpClient = await this.httpClient();
    const { data } = await httpClient.post('users', { email });

    return !!data;
  }
}
