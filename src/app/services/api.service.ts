// Angular modules
import { Injectable } from '@angular/core'

// External modules
import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios'

// Internal modules
// import { ToastManager }             from '@app/components/toast/toast.manager';
import { environment } from '@env/environment'

// Services
import { StoreService } from './store.service'
import { LocalStorageService } from './local-storage.service'
import { storageKeys } from '@app/constants/storage-keys'
import { IAuthStorage } from '@app/models/auth.model'

@Injectable()
export abstract class ApiService {
  // NOTE Default configuration
  private default: CreateAxiosDefaults = {
    withCredentials: true,
    timeout: 990000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  constructor(
    private storeService: StoreService,
    // private toastManager     : ToastManager,
    public storageService: LocalStorageService
  ) {}

  public initRequestInterceptor(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      (config) => {
        this.storeService.setIsLoading(true)

        return config
      },
      (error) => {
        this.storeService.setIsLoading(false)

        // this.toastManager.quickShow(error);
        return Promise.reject(error)
      }
    )
  }

  public initResponseInterceptor(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response) => {
        this.storeService.setIsLoading(false)

        return response
      },
      async (error: AxiosError) => {
        this.storeService.setIsLoading(false)

        // NOTE Prevent request canceled error
        if (error.code === 'ERR_CANCELED') return Promise.resolve(error)

        // this.toastManager.quickShow(error.message);
        return Promise.reject(error)
      }
    )
  }

  /**
   *
   * @protected
   */
  protected async httpClient(): Promise<AxiosInstance> {
    const httpClient: AxiosInstance = axios.create({
      baseURL: environment.apiBaseUrl,
      ...this.default,
    })

    const authProfile = this.storageService.getValue<IAuthStorage>(storageKeys.authProfile)
    const token = authProfile?.token || ''
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token

    this.initRequestInterceptor(httpClient)
    this.initResponseInterceptor(httpClient)

    return httpClient
  }
}
