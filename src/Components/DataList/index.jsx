import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDataList} from '../../store/features/dataListSlice'
import {Loader} from 'semantic-ui-react';

function DataList(){

    const dispatch=useDispatch();

    const currentPage=1;

    const {searchQuery}=useSelector(state=>state.search);

    const {dataList, isLoading} = useSelector(state=>state.dataList);

    useEffect(()=>{
        dispatch(fetchDataList(searchQuery, currentPage));
    },[searchQuery, dispatch])


    if (isLoading){
        return(
            <Loader active inline='centered'/>
        )
    }
    console.log(dataList);
    return(
        <div>
            {dataList.map((image,index)=>(
                <div key={index} className="datalist-item">
                    <p>{image.title}</p>
                    <img src={image.image}/>
                </div>
            ))}
        </div>
    )
}

export default DataList;