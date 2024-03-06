import { PayloadAction } from "@reduxjs/toolkit";

import * as actionTypes from "./actionTypes";
import { IProductState } from "./types";

const initialState: IProductState = {
  productItems: [],
};

export const productReducer = (
  state: IProductState = initialState,
  action: PayloadAction<IProductState>
): IProductState => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_LIST:
      return { ...action.payload };
    case actionTypes.PRODUCTS_REQUEST_FAILED:
      console.warn(actionTypes.PRODUCTS_REQUEST_FAILED, action.type);
      return state;
    default:
      return state;
  }
};

// import { PRODUCTS_REQUEST_FAILED, SET_PRODUCT_LIST } from "./actionTypes";
// export const productReducer: any = () => {
// setProductList: any = (state = initialState, action: PayloadAction<IProductState>) => {
//   state.productItems = action.payload.productItems
// }
// }

// export const productReducer = (data = [], action: any) => {
//   switch (action.type) {
//     case SET_PRODUCT_LIST:
//       return [...action.response.products];
//     case PRODUCTS_REQUEST_FAILED:
//       console.warn("PRODUCTS_REQUEST_FAILED", action);
//       return [];
//     default:
//       return data;
//   }
// };
