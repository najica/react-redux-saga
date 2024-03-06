import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "../sagas/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

// export type AppDispatch = typeof rootReducer.dispatch;

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
