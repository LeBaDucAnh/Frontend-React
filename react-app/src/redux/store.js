
import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/appReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import libraryReducer from "./reducers/libraryReducer";
import classReducer from "./reducers/classReducer";


const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
    library: libraryReducer,
    class: classReducer,
  }
});

export default store;