import axios from "axios";
import { API_URL } from "../constant/env";

const FULL_DOMAIN = API_URL;
export const axiosClient = axios.create({
  baseURL: FULL_DOMAIN,
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return Promise.resolve(response.data);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

export * from "./getLang";
