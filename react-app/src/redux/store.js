
import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/appReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import libraryReducer from "./reducers/libraryReducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    library: libraryReducer,
  }
});

export default store;