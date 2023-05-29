import React, {useState} from "react";
import {Input} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import {useDispatch} from "react-redux";
import {setSearchQuery} from '../../store/features/searchSlice';

function Search(){

    const [search, setSearch]=useState("");
    const dispatch = useDispatch();

    return(
        <div className="search">
            <Input
                size="huge"
                icon='search'
                placeholder='Search...'
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                />

            <Button 
                size="huge" 
                primary
                onClick={()=>dispatch(setSearchQuery(search))}
                >Search</Button>   
        </div>
    )
}

export default Search;