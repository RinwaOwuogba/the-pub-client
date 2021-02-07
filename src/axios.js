import axios from "axios";

const customInstance = (options = {}) => {
  const baseAxios = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_API_URL
        : "http://localhost:4324",
    headers: {
      "Content-type": "application/json",
      "x-access-token": sessionStorage.getItem("x-access-token"),
      ...options,
    },
    withCredentials: true,
  });

  const refreshAccessTokens = () => {
    return new Promise((resolve, reject) => {
      baseAxios
        .post("/auth/refreshTokens")
        .then((response) => {
          const { accessToken } = response.data;
          sessionStorage.setItem("x-access-token", accessToken);
          resolve(accessToken);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  baseAxios.interceptors.response.use(
    // const resInterceptor = baseAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      try {
        const originalRequest = error.config;
        // eslint-disable-next-line no-underscore-dangle
        if (error.response.status === 401 && !originalRequest._retry) {
          // eslint-disable-next-line no-underscore-dangle
          originalRequest._retry = true;
          // baseAxios.interceptors.response.eject(resInterceptor);
          originalRequest.headers.authorization = await refreshAccessTokens();
          return baseAxios(originalRequest);
        }
      } catch (_error) {
        // console.error(error);
      }
      return Promise.reject(error);
    }
  );

  return baseAxios;
};

export default customInstance();
