import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice';
import dataListReducer from './features/dataListSlice';

export const store = configureStore({
    reducer:{
        search:searchReducer,
        dataList:dataListReducer,
    }
});