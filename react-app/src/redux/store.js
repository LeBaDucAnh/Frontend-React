import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/appReducer";
import dashboardReducer from "./reducers/dashboardReducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer
  }
});

export default store;