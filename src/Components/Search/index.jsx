import React, {useState} from "react";
import {GridColumn, GridRow, Input} from 'semantic-ui-react';
import {Button, Grid, Dropdown} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchQuery, setMinCalories, setMaxCalories} from '../../store/features/searchSlice';

const dataTypeOptions=[];

function Search(){

    const [search, setSearch]=useState("");
    const dispatch = useDispatch();

    const {minCalories, maxCalories}= useSelector(state=>state.search);

    return(
        <div className="search">
            <div className="search-field">
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

            <Grid columns={2} className="Rows">
                <GridRow>
                    <GridColumn>
                        <h3>MinCalories:</h3>
                        <Input className="input_calories" placeholder="Min calories" 
                            value={minCalories}
                            onChange={(e)=>dispatch(setMinCalories(e.target.value))}/>
                    </GridColumn>
                    <GridColumn>
                        <h3>MaxCalories:</h3>
                        <Input className="input_calories" placeholder="Max calories" 
                        value={maxCalories}
                        onChange={(e)=>dispatch(setMaxCalories(e.target.value))}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Search;