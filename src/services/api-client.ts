import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fac92c6359f411eb62389d0bb85a0e4", // 请求接口的密钥
  },
});

export interface FetchResult<T> {
  count: number;
  next: string | null;
  results: T[];
}

class ApiClient<T> {
  endPoint: string;

  constructor(endpoint: string) {
    this.endPoint = endpoint;
  }

  getAll = (axiosRequestConfig: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResult<T>>(this.endPoint, axiosRequestConfig)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
