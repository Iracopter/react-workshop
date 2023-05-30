import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchQuery: "",
    minCalories:0,
    maxCalories:800,
}

export const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearchQuery:(state, action)=>{
            state.searchQuery=action.payload;
        },
        setMinCalories:(state, action)=>{
            state.minCalories=action.payload;
        },
        setMaxCalories:(state, action)=>{
            state.maxCalories=action.payload;
        }
    }
});

export const {setSearchQuery, setMinCalories, setMaxCalories} = searchSlice.actions;

export default searchSlice.reducer;