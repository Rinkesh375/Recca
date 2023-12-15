import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS,PRODUCT_STATUS_UPDATE } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  productArray: [],
}


const productReducer = (state = initialState, { type, payload }) => {


  switch (type) {
    case PRODUCT_LOADING: return { ...state, isLoading: true };
    case PRODUCT_ERROR: return { ...state, isError: true, isLoading: false };
    case PRODUCT_SUCCESS: return { productArray: payload, isError: false, isLoading: false };
    case PRODUCT_STATUS_UPDATE:return {productArray:state.productArray.map(ele=>ele.id === payload.id?{...payload}:ele)}  
    ;
    default: return { ...state };
  }
}

export default productReducer
