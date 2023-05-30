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
            <div>
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

            <Grid columns={3}>
                <GridRow>
                    <GridColumn>
                        <Input placeholder="Min calories" 
                            value={minCalories}
                            onChange={(e)=>dispatch(setMinCalories(e.target.value))}/>
                    </GridColumn>
                    <GridColumn>
                        <Input placeholder="Max calories" 
                        value={maxCalories}
                        onChange={(e)=>dispatch(setMaxCalories(e.target.value))}/>
                    </GridColumn>
                    <GridColumn>
                        <Button
                        size="big" 
                        primary>Chosen</Button> 
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Search;