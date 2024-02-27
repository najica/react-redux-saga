import { SEARCH_PRODUCT, PRODUCT_LIST } from "./constant";

export const productList = () => {
  // let data = "hello, How are you";

  return {
    type: PRODUCT_LIST,
    // data: "test apple",
  };
};

export const productSearch = (query: any) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
