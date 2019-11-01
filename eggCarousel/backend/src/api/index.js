import httpAxios from '@/utils/httpAxios'
export const addCarousel = (params)=>httpAxios.post("/api/addCarousel",params)

export const getCarouselList = (params)=>httpAxios.get("/api/getCarouselList",{params})

export const login = (params)=>httpAxios.post("/api/user/login",params)