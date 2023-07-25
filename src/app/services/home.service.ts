// Angular modules
import { Injectable } from '@angular/core';
import { storageKeys } from '@app/constants/storage-keys';
import { ApiService } from './api.service';

@Injectable()
export class HomeService extends ApiService {
  async getPosts(): Promise<any> {
    const httpClient = await this.httpClient();
    const { data } = await httpClient.get('posts');


    return data
  }
}
