import { IProductState } from "./types";

// Define action types
export const GET_PRODUCTS = "productsActionTypes/GET_PRODUCTS";
export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
}

export const PRODUCTS_REQUEST_FAILED =
  "productsActionTypes/PRODUCTS_REQUEST_FAILED";
export interface ProductsRequestFailed {
  type: typeof PRODUCTS_REQUEST_FAILED;
  payload: any;
}

export const SET_PRODUCT_LIST = "productsActionTypes/SET_PRODUCT_LIST";
export interface SetProducts {
  type: typeof SET_PRODUCT_LIST;
  payload: IProductState;
}

export const SEARCH_PRODUCT = "productsActionTypes/SEARCH_PRODUCT";
export interface SearchProducts {
  type: typeof SEARCH_PRODUCT;
}

//export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

// export const getProductList = (): IGetProductListAction => ({
//   type: GET_PRODUCT_LIST,
// });
// export const actionGetProductList = () => ({
//   type: GET_PRODUCTS,
// });
