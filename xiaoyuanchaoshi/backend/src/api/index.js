import axios from 'axios'
export const login = (params)=>{
    return axios.post("/admin/login",params)
}
export const getProductList = (params={startInd:0,count:5})=>{
    return axios.get("/admin/pageProduct",{params})
}
export const delProductById = (params)=>{
    return axios.post("/admin/delProduct",params)
}

export const updateProduct = (params)=>{
    return axios.post("/admin/editProduct",params)
}

export const addProduct = (params)=>{
    return axios.post("/admin/addProduct",params)
}

export const searchProduct = (params)=>{
    return axios.get("/searchProduct",{params})
}