// Angular modules
import { Injectable } from '@angular/core';
import { storageKeys } from '@app/constants/storage-keys';
import { ApiService } from './api.service';
import { ERole } from '@app/enums/role.enum';
import { IAuthStorage } from '@app/models/auth.model';

@Injectable()
export class AuthService extends ApiService {
  async authenticate(email: string, password: string): Promise<boolean> {
    this.storageService.remove(storageKeys.authProfile);

    const httpClient = await this.httpClient();
    const { data } = await httpClient.post('users', { email, password });

    if (!data) return false;
    // const authResponse = new AuthResponse(data);
    const authData: IAuthStorage = {
      token: 'TOKEN XXXXXX', // fake token
      role: email === 'admin@gmail.com' ? ERole.Admin : ERole.User,
    }
    this.storageService.setObject(storageKeys.authProfile, authData);
    return true;
  }

  async forgotPassword(email: string): Promise<boolean> {
    const httpClient = await this.httpClient();
    const { data } = await httpClient.post('users', { email });

    return !!data;
  }

  async logout(): Promise<boolean> {
    const httpClient = await this.httpClient();
    const { data } = await httpClient.get('users');

    return !!data;
  }
}
