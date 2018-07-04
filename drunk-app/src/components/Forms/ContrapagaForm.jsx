import React from "react";
import {Grid,FormControl ,TextField } from "material-ui";
import ItemGrid from "../Grid/GridItem";

const styles = {
  container : {
    width: '400px',
    paddingBottom : '30px'
  }
}

class Publications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      telefono: '',
      direccion: '',
      fecha: ''
    };
  }

 //manejador para inputs de descripcion, tipo y categorias
  handleChange = event => { this.setState({ [event.target.name]: event.target.value });}

  render() {                            
    return ( <div style={styles.container}>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="nombre"
                        label="Nombre:"
                        name="nombre"
                        fullWidth
                        margin="normal"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="telefono"
                        label="Teléfono:"
                        name="telefono"
                        fullWidth
                        margin="normal"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                      <TextField
                        id="direccion"
                        label="Dirección:"
                        name="direccion"
                        fullWidth
                        margin="normal"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                  </ItemGrid>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                    <TextField
                     id="fecha"
                     label="Fecha de entrega:"
                     type="date"
                     defaultValue="2018-05-24"
                     InputLabelProps={{                                                 
                      shrink: true,
                    }}
                    />
                  </FormControl>
                  </ItemGrid>
                </Grid>        
              </div>
    );
  }
}

export default Publications;


