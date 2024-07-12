import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { getToken, removeAllTokens } from "./localStorage.mjs";

const jwtInterceptor = () => {
  axios.interceptors.request.use((req) => {
    const token = getToken();
    if (token) {
      const { exp } = jwtDecode(token);
      const expirationTime = exp * 1000;
      if (Date.now() >= expirationTime) {
        removeAllTokens()
        window.location.replace("/");
      } else {
        req.headers = {
          ...req.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return req;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        removeAllTokens()
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
};

export default jwtInterceptor;
