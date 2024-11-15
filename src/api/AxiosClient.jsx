import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://toy-kingdom-backend.onrender.com",
  // baseURL: "http://localhost:8080",
  header: {
    "Content-Type": "application/json",
  },
});

export const setRestAuth = (token) => {
  if (token) {
    axiosClient.defaults.headers.common["Authorization"] = `Basic ${token}`;
  }
};

export const deleteAuthorization = () => {
  delete axiosClient.defaults.headers.common.Authorization;
  delete axiosClient.defaults.headers.common["Authorization"];
};

// interceptors (kiểm tra resquest và response)
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
