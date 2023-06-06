import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDataList, setCurrentPage} from '../../store/features/dataListSlice'
import {Loader, Button, Pagination} from 'semantic-ui-react';

function DataList({ handleSaveToFavorite, handleMoreInfo, handleOtherButtonClick}){

    const {searchQuery,
           minCalories,
           maxCalories,
           }=useSelector(state=>state.search);

    const {dataList, isLoading, currentPage,totalPages} = useSelector(state=>state.dataList);

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
        currentPage,
        dispatch])


    if (isLoading){
        return(
            <Loader active inline='centered'/>
        )
    }

    if(dataList.length===0){
        return null;
    }
   

    return(
        <div>
            {dataList.map((image,index)=>(
                <div key={index} className="datalist-item">
                    <p>{image.title}</p>
                    <img className="photo" src={image.image}/>
                    <div className="button-block">
                    <Button onClick={() => {
                            handleMoreInfo(image.title, image.image, image.id, [image.analyzedInstructions]);
                            handleOtherButtonClick();
                            }}
                            primary>More details</Button>
                    <Button onClick={() => handleSaveToFavorite(image.title, image.image, image.id, [image.analyzedInstructions])}
                            primary>Add to favorites</Button>
                    </div>
                </div>
            ))}
            <Pagination
            defaultActivePage={currentPage}
            totalPages={totalPages}
            onPageChange={(e, {activePage}) => dispatch(setCurrentPage(activePage))}/>
        </div>
    );
};


export default DataList;
