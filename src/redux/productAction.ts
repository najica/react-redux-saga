import { SEARCH_PRODUCT, PRODUCT_LIST } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query: any) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
