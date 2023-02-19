import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

interface IHttpClient {
  get<TResponse>(url: string): Promise<TResponse>;
  post<TResponse>(url: string, data?: object): Promise<TResponse>;
}

class AxiosHttpClient implements IHttpClient {
  private instance: AxiosInstance | null = null;

  private get axiosClient(): AxiosInstance {
    return this.instance ?? this.initAxiosClient();
  }

  private initAxiosClient() {
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

  post<TResponse>(url: string, data?: object): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.axiosClient
        .post<TResponse, AxiosResponse<TResponse>>(url, data)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error: Error | AxiosError) => {
          reject(error);
        });
    });
  }
}

class FetchHttpClient implements IHttpClient {
  get<TResponse>(url: string): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      fetch(url)
        .then((response) =>
          response
            .json()
            .then((responseJson) => {
              resolve(responseJson as TResponse);
            })
            .catch((error: Error) => {
              reject(`Response JSON parsing error: ${error}`);
            })
        )
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  post<TResponse>(url: string, data?: object): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) =>
          response
            .json()
            .then((responseJson) => {
              resolve(responseJson as TResponse);
            })
            .catch((error: Error) => {
              reject(`Response JSON parsing error: ${error}`);
            })
        )
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
}

export const httpClient: IHttpClient = new FetchHttpClient();
