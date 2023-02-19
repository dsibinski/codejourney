import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

interface IHttpClient {
  get<TResponse>(url: string): Promise<TResponse>;
}

class AxiosHttpClient implements IHttpClient {
  private instance: AxiosInstance | null = null;

  private get axiosClient(): AxiosInstance {
    return this.instance ?? this.initAxiosClient();
  }

  initAxiosClient() {
    return axios.create();
  }

  get<TResponse>(url: string): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.axiosClient
        .get<TResponse, AxiosResponse<TResponse>>(url)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error: Error | AxiosError) => {
          reject(error);
        });
    });
  }
}

export const httpClient: IHttpClient = new AxiosHttpClient();
