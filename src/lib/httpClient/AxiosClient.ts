import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { URLS } from '../../services/urls';
import { IHttpAdapter } from './IHttpAdapter';

abstract class AxiosClient implements IHttpAdapter {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: URLS.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async get<T = object, R = AxiosResponse<T>>(url: string, params: object): Promise<R> {
    return this.http.get(url, { params });
  }

  async post<T = object, R = AxiosResponse<T>>(url: string, body: object): Promise<R> {
    return this.http.get(url, body);
  }

  async delete<T = object, R = AxiosResponse<T>>(url: string, body: object): Promise<R> {
    return this.http.get(url, body);
  }

  async put<T = object, R = AxiosResponse<T>>(url: string, body: object): Promise<R> {
    return this.http.get(url, body);
  }
}

export { AxiosClient };
