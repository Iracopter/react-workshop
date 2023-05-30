import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDataList} from '../../store/features/dataListSlice'
import {Loader} from 'semantic-ui-react';

function DataList({ handleSaveToFavorite},{handleMoreInfo}){

    const currentPage=1;

    const {searchQuery,
            minCalories,
            maxCalories}=useSelector(state=>state.search);

    const {dataList, isLoading} = useSelector(state=>state.dataList);

    const dispatch=useDispatch();

    useEffect(()=>{
        if(searchQuery==="") return;

        dispatch(fetchDataList({searchQuery, 
            page:currentPage,
            minCalories,
            maxCalories,
        }));
    },[
        searchQuery,
        minCalories,
        maxCalories, 
        dispatch])


    if (isLoading){
        return(
            <Loader active inline='centered'/>
        )
    }
   

    return(
        <div>
            {dataList.map((image,index)=>(
                <div key={index} className="datalist-item">
                    <p>{image.title}</p>
                    <img src={image.image}/>
                    <button onClick={() => handleMoreInfo(image.title, image.image, [image.analyzedInstructions])}>Детальніше</button>
                    <button onClick={() => handleSaveToFavorite(image.title, image.image, [image.analyzedInstructions])}>В обрані</button>
                </div>
            ))}
        </div>
    );
};


export default DataList;
