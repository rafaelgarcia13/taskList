import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { URLS } from '../../services/urls';
import { IHttpRequests } from './IHttpRequests';

abstract class AxiosAdapter implements IHttpRequests {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: URLS.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async get<T>(url: string, params: object): Promise<AxiosResponse<T>> {
    return this.http.get(url, { params });
  }

  async post<T>(url: string, body: object): Promise<AxiosResponse<T>> {
    return this.http.get(url, body);
  }

  async delete<T>(url: string, body: object): Promise<AxiosResponse<T>> {
    return this.http.get(url, body);
  }

  async put<T>(url: string, body: object): Promise<AxiosResponse<T>> {
    return this.http.get(url, body);
  }
}

export { AxiosAdapter };
