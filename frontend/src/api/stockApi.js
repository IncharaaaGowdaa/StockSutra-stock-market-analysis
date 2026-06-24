import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8003/api",
  timeout: 10000,
});

export const getStock = (ticker) =>
  api.get(`/stock/${ticker}`);

export const getHistory = (ticker) =>
  api.get(`/history/${ticker}`);

export const getAnalysis = (ticker) =>
  api.get(`/analyze/${ticker}`);

export const getNews = (ticker) =>
  api.get(`/news/${ticker}`);

export const getTechnicalAnalysis = (ticker) =>
  api.get(`/analyze/${ticker}`);

export const getAIAnalysis = (ticker) =>
  api.get(`/ai/${ticker}`);

export const getScore = (ticker) =>
  api.get(`/score/${ticker}`);

export const compareStocks = (ticker1, ticker2) =>
  api.get(
    `/compare/?ticker1=${ticker1}&ticker2=${ticker2}`
  );

export default api;