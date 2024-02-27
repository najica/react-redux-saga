import { PRODUCTS_REQUEST_FAILED, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // console.warn("PRODUCT_LIST condition called", action);
      return [...action.data.products];
    case PRODUCTS_REQUEST_FAILED:
      console.warn("PRODUCTS_REQUEST_FAILED", action);
      return [];
    default:
      return data;
  }
};
