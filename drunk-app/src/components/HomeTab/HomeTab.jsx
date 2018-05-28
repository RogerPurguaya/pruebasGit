import React from 'react';
import CardBasic from "../CardBasic/CardBasic.jsx"
import ItemGrid from "../Grid/ItemGrid.jsx"
import {Grid, TextField, FormLabel} from "@material-ui/core";
import ImageGrid from "../ImageGrid/ImageGrid.jsx"
import Map from "../Map/Map.jsx"
import CustomItemsList from "../CustomItemList/CustomItemList.jsx"

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: '0px',
        marginRight: '0px',
      },
      menu: {
        width: 200,
      },
      containerMap: {
          width: '100%',
          height: '200px',
          marginTop: '20px'
      }
}

export default class ContainerTab extends React.Component{
    state = {
        direccion:'',
        telefono: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    render(){
        return (<div>
         <Grid container>
            <ItemGrid xs={12} sm={12} md={6}>
                <TextField
                id="direccion"
                label="Marque su dirección"
                className={styles.textField}
                fullWidth
                onChange={this.handleChange}
                margin="normal"
                />
            <div style={styles.containerMap}>
                 <Map />
            </div>

            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
                <TextField
                    id="telefono"
                    label="Teléfono de referencia:"
                    className={styles.textField}
                    fullWidth
                    onChange={this.handleChange}
                    margin="normal"
                    />
                <br/><br/><br/>
                <FormLabel>Productos seleccionados:</FormLabel>
                <CustomItemsList />
            </ItemGrid>
            </Grid>
        </div>)
    }
}