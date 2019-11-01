import axios from 'axios'

export const getCarouselList = ()=> axios.get("/api/getCarouselList")
export const getNavList = ()=> axios.get("/api/getNavigatorList")
export const getProductList = (params)=> axios.get("/api/getProductList",{params})
export const getDetail = (id) => axios.get('/api/getDetail',{params:{id}})