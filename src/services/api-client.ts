import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fac92c6359f411eb62389d0bb85a0e4", // 请求狗太接口的密钥
  },
});
