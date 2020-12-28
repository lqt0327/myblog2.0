import axios from "axios";

export const baseUrl = process.env.NODE_ENV === 'development' ?
   "http://[::1]:3001" : "https://api.luoqintai.cn";

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };