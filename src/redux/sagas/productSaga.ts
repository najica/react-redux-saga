import { put, call, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../product/actionTypes";
import * as actions from "../product/actions";

const apiUrl: string = process.env.REACT_APP_API_URL as string;
//or we can do it with non-null assertion operator (!) //const apiUrl: string = process.env.REACT_APP_API_URL!;

function productsFetch() {
  return fetch(apiUrl).then((response) => response.json());
}

/*   workers   */
function* getProductsWorker(): any {
  try {
    const response = yield call(productsFetch);
    yield put(actions.setProducts({ productItems: response.products }));
  } catch (error) {
    yield put(actions.productsRequestFailed(error));
  }
}

function* searchProductsWorker(data: any): any {
  try {
    const result = yield fetch(`${apiUrl}search?q=${data.payload}`).then(
      (response) => response.json()
    );
    yield put(actions.setProducts({ productItems: result.products }));
  } catch (error) {
    yield put(actions.productsRequestFailed(error));
  }
}

/*   watchers   */
function* productSaga() {
  yield takeLatest(actionTypes.GET_PRODUCTS, getProductsWorker);
  yield takeLatest(actionTypes.SEARCH_PRODUCT, searchProductsWorker);
}

export default productSaga;

// import { IProductState } from "../product/types";
// import {
//   //GET_PRODUCT_LIST,
//   PRODUCTS_REQUEST_FAILED,
//   //GET_PRODUCT_LIST,
//   SEARCH_PRODUCT,
//   //SET_PRODUCT_LIST,
//   //actionGetProductList,
// } from "../product/actionTypes";
// import {
//   PRODUCTS_REQUEST_FAILED,
//   PRODUCT_LIST,
//   SEARCH_PRODUCT,
//   SET_PRODUCT_LIST,
// } from "../constant";

//import { getProducts, setProductList } from "../product/actions";
// function* getProductsWorker(): any {
//   try {
//     const response = yield call(productsFetch);
//     //yield put({ type: SET_PRODUCT_LIST, data: response.products });
//     yield put(actions.SetProducts({ productItems: response.products }));
//   } catch (error) {
//     //yield put({ type: actionTypes.PRODUCTS_REQUEST_FAILED, error });
//     yield put(actions.productsRequestFailed(error));
//   }
// }
