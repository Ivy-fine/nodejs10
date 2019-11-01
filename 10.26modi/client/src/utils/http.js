import axios from "axios";
const http = axios.create({
    timeout: 5000
});
http.interceptors.request.use(
    config => {
        const token = window.sessionStorage.token
            ? window.sessionStorage.token
            : "";
        config.headers.token = token;
        if (config.url !== "/api/user/login") {
            if (!token.length) {
                window.location.href = "/login";
            }
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
http.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);
export default http;
