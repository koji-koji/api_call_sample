import axios from "axios";

const simpleAxiosInstance = axios.create({
  baseURL: 'https://127.0.0.1:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

simpleAxiosInstance.interceptors.request.use((config) => {
  // 認証トークンをリクエストパラメータに付与する
  const app_token = localStorage.getItem('appToken');
  config.params = { ...config.params, app_token: app_token };
  return config;
})

export default simpleAxiosInstance;