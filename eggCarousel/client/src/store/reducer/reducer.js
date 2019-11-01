function reducer(state={pageInd:0,products:[],type:0,pageSize:3,count:0},action){
    switch(action.type){
        case "CHANGETYPE":
            return {...state,type:action.typeInd}
        case "CHANGEPAGEIND":
            return {...state,pageInd:action.ind};
        case "GETMOREPRODUCTS":
            return {...state,products:[...state.products,...action.data.result],count:action.data.count}
        case "GETTYPEPRODUCTS":
            return {...state,products:[...action.data.result],count:action.data.count}
        default :
            return {...state};
    }
}

export default reducer;