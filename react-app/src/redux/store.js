import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/appReducer";

const store = configureStore({
  reducer: {
    app: appReducer
  }
});

export default store;