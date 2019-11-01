import axios from 'axios'

const httpAxios = axios.create({
    timeout:5000
})

httpAxios.interceptors.request.use(config=>{
    const token = sessionStorage.token ? sessionStorage.token:''
    config.headers.authorization = token
    if(config.url!=="/user/login"){
        if(!token.length){
            window.location.href="/login"
        }
    }
    return config;
},function(err){
    return Promise.reject(err)
})

httpAxios.interceptors.response.use(response=>{
    return response;
},function(err){
    return Promise.reject(err)
})

export default httpAxios;