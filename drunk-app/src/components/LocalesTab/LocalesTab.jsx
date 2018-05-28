import React from 'react';
import CardBasic from "../CardBasic/CardBasic.jsx"
import ItemGrid from "../Grid/ItemGrid.jsx"
import {Grid} from "@material-ui/core";
import ImageGrid from "../ImageGrid/ImageGrid.jsx"
import Map from "../Map/Map.jsx"

export default class LocalesTab extends React.Component{
    state = {

    }

    render(){
        return (<div>
         <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
                <h1 style={{textAlign: 'center'}}>LOCALES</h1>
            </ItemGrid>
            </Grid>
            <Grid container>
            <ItemGrid xs={12} sm={12} md={6}>
                <CardBasic titulo="Información del Local"
                        descripcion="Este local se ubica en la Av. Independencia."
                />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
                <ImageGrid />
            </ItemGrid>
            </Grid>
            <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
                <h1 style={{textAlign: 'center'}}>UBICACION</h1>
                <Map />
            </ItemGrid>
            </Grid>
        </div>)
    }
}