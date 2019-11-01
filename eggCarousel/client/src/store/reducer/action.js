import axios from "@/utils/httpAxios";
function getMoreProduct(type, pageInd, pageSize) {
    const ind = pageInd * pageSize;
    return (dispatch, getState) => {
        axios
            .get("/getProducts", { params: { type, pageInd: ind, pageSize } })
            .then(res => {
                dispatch({
                    type: "GETMOREPRODUCTS",
                    data: res.data.result
                });
            });
    };
}
function getTypeProduct(type, pageInd, pageSize) {
    const ind = pageInd * pageSize;
    return (dispatch, getState) => {
        axios
            .get("/getProducts", { params: { type, pageInd: ind, pageSize } })
            .then(res => {
                dispatch({
                    type: "GETTYPEPRODUCTS",
                    data: res.data.result
                });
            });
    };
}
export { getMoreProduct, getTypeProduct };
