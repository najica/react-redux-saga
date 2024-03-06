import { createAction } from "@reduxjs/toolkit";

import * as actionTypes from "./actionTypes";
import { IProductState } from "./types";

export const getProducts = (): actionTypes.GetProductsAction => ({
  type: actionTypes.GET_PRODUCTS,
});

export const setProducts = (
  payload: IProductState
): actionTypes.SetProducts => ({
  type: actionTypes.SET_PRODUCT_LIST,
  payload,
});

export const productSearch = createAction(
  actionTypes.SEARCH_PRODUCT,
  (query: string) => ({
    payload: query,
  })
);

export const productsRequestFailed = (
  error: any
): actionTypes.ProductsRequestFailed => ({
  type: actionTypes.PRODUCTS_REQUEST_FAILED,
  payload: error,
});

// import { SEARCH_PRODUCT, PRODUCT_LIST } from "../constant";
// import {
//   //GET_PRODUCT_LIST,
//   SEARCH_PRODUCT,
//   SET_PRODUCT_LIST,
//   //GetProductsAction,
// } from "./actionTypes";
// export const productList = () => {
//   return {
//     type: PRODUCT_LIST,
//     data: null,
//   };
// };

// export const productList = () => {
//   return {
//     type: getProductList,
//     // data: response,
//   };
// };
// export const productSearch = (query: any) => {
//   return {
//     type: SEARCH_PRODUCT,
//     query,
//   };
// };

// export const setProductList = createAction(SET_PRODUCT_LIST, (data: any) => ({
//   payload: data,
// }));
