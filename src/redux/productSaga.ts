import { takeEvery, put, call } from "redux-saga/effects";

import {
  PRODUCTS_REQUEST_FAILED,
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
} from "./constant";

const apiUrl: string = process.env.REACT_APP_API_URL as string;
//or with non-null assertion operator (!) //const apiUrl: string = process.env.REACT_APP_API_URL!;

function productsFetch() {
  return fetch(apiUrl).then((response) => response.json());
}

function* workGetProducts(): any {
  try {
    const data = yield call(productsFetch);
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    yield put({ type: PRODUCTS_REQUEST_FAILED, error });
  }
}

function* workSearchProducts(data: any): any {
  try {
    const result = yield fetch(`${apiUrl}search?q=${data.query}`).then(
      (response) => response.json()
    );
    yield put({ type: SET_PRODUCT_LIST, data: result });
  } catch (error) {
    yield put({ type: PRODUCTS_REQUEST_FAILED, error });
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, workGetProducts);
  yield takeEvery(SEARCH_PRODUCT, workSearchProducts);
}

export default productSaga;
