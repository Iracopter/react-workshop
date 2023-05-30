import { createSlice } from "@reduxjs/toolkit";
import { getInfo } from "../../api";

const initialState={
    dataList:[],
    isLoading:false,
    error:null,
    totalPages:0,
};

export const dataListSlice=createSlice({
    name:"dataList",
    initialState,
    reducers:{
        setDataList:(state,action)=>{
            state.dataList=action.payload;
        },
        setisLoading:(state,action)=>{
            state.isLoading=action.payload;
        },
        setError:(state,action)=>{
            state.error=action.payload;
        },
        setTotalPages:(state,action)=>{
            state.totalPages=action.payload / 20;
        }
    }
});

export const {setDataList, setError, setTotalPages, setisLoading} = dataListSlice.actions;

export const fetchDataList=({searchQuery, 
                            page,
                            minCalories,
                            maxCalories,})=>async(dispatch)=>{
    dispatch(setisLoading(true));
    try{
        const data=await getInfo({queryString: searchQuery, page, minCalories, maxCalories});
        dispatch(setDataList(data.results));
        dispatch(setTotalPages(data.totalResults));
    } 
    catch(error){
        dispatch(setError(error));
    }
    finally{
        dispatch(setisLoading(false));
    }
}

export default dataListSlice.reducer;