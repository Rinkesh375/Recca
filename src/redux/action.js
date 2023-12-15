
import { PRODUCT_SUCCESS,PRODUCT_LOADING,PRODUCT_ERROR, PRODUCT_STATUS_UPDATE } from "./actionTypes"
import axios from "axios";
export const url = "https://recca-backend.onrender.com/products";


const getProduct  = (data)=>async(dispatch)=>{
    dispatch({type:PRODUCT_LOADING})
  try {
       const res = await axios.get(url);
  dispatch({type:PRODUCT_SUCCESS,payload:res.data})
  } catch (error) {
    dispatch({type:PRODUCT_ERROR})
  }

}

const updateProductStatus = ({id,obj})=>async(dispatch)=>{
      try {
        const res = await axios.patch(`${url}/${id}`,obj);
  
        dispatch({type:PRODUCT_STATUS_UPDATE,payload:res.data})
      } catch (error) {
        dispatch({type:PRODUCT_ERROR})
      }
}

export {getProduct,updateProductStatus}


