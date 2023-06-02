type IResponseType<T = object> = {
  [key: string]: unknown;
  status: number;
  data: T;
};

interface IHttpAdapter {
  get<T = object>(url: string, params?: object): Promise<IResponseType<T>>;
  post<T = object>(url: string, body: object): Promise<IResponseType<T>>;
  put<T = object>(url: string, body: object): Promise<IResponseType<T>>;
  delete<T = object>(url: string, body?: object): Promise<IResponseType<T>>;
}

export type { IHttpAdapter, IResponseType };
