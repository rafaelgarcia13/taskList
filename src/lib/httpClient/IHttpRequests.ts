type IResponseType<T> = {
  status: number;
  data: T;
};

interface IHttpRequests {
  get<T>(url: string, params?: object): Promise<IResponseType<T>>;
  post<T>(url: string, body: object): Promise<IResponseType<T>>;
  put<T>(url: string, body: object): Promise<IResponseType<T>>;
  delete<T>(url: string, body?: object): Promise<IResponseType<T>>;
}

export type { IHttpRequests, IResponseType };
