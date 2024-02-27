import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

import productSaga from "./productSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
