import axios from "axios";
let httpAxios = axios.create({
  timeout: 5000
});
// Add a request interceptor
httpAxios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const token = sessionStorage.token ? sessionStorage.token : "";
    const whiteList = ['/api/user/login'];
    const inWhiteList = whiteList.includes(config.url);
    if (!inWhiteList) {
      if (!token.length) {
        location.href="/user/login"
        return Promise.reject({
          code: 0,
          msg: "你还没有登陆，没有访问权限!"
        });
      }
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: token
      }
    };
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpAxios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default httpAxios;
