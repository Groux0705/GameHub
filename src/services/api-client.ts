import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fac92c6359f411eb62389d0bb85a0e4", // 请求接口的密钥
  },
});

export default axiosInstance;

export interface FetchResult<T> {
  count: number;
  results: T[];
}

export class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    axiosInstance.get<FetchResult<T>[]>(this.endPoint).then((res) => res.data);
  };

  post = (data: T) => {
    axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
  };
}
