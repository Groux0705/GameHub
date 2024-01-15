import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fac92c6359f411eb62389d0bb85a0e4", // 请求接口的密钥
  },
});

export default AxiosInstance;

export interface FetchResult<T> {
  count: number;
  results: T[];
}
