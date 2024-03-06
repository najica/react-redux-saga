import { IProduct } from "../product/types";
import * as actionTypes from "./actionTypes";

export const addToCart = (payload: IProduct): actionTypes.AddToCart => ({
  type: actionTypes.ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload: any): actionTypes.RemoveFromCart => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload,
});

export const emptyCart = (): actionTypes.EmptyCart => ({
  type: actionTypes.EMPTY_CART,
});

// export const addToCart = (data: any) => {
//   return {
//     type: ADD_TO_CART,
//     data,
//   };
// };

// export const removeToCart = (data: any) => {
//   return {
//     type: REMOVE_FROM_CART,
//     data,
//   };
// };

// export const emptyCart = () => {
//   return {
//     type: EMPTY_CART,
//     data: null,
//   };
// };
