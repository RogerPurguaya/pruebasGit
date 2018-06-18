import React from "react";


import withStyles from "material-ui/styles/withStyles";


import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";


import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class Barman extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h1><center><b>Contactar Bartman</b></center></h1>
            </div>
            <div className={classes.title}>
              <h3>
                <small><b>Barmans</b></small>
              </h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} lg={6}>
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: "Barman 1",
                      
                      tabContent: (
                        <span>
                          <p>
                             Aqui la imagen y la informacion
                          </p>
                          <GridItem xs={12} sm={12} md={8}>
                
                
                <center><Button color="success">Precio S/.</Button></center>
                
              </GridItem>

                          
                        </span>
                      )
                    },
                    
                    {
                      tabButton: "Barman 2",
                      
                      tabContent: (
                        <span>
                          <p>
                            Aqui la imagen y la informacion
                          </p>
                          <GridItem xs={12} sm={12} md={8}>
                
                
                <center><Button color="info">Precio S/.</Button></center>
                
              </GridItem>
                          
                        </span>
                      )
                    }, 
                    {
                      tabButton: "Barman 3",
                      
                      tabContent: (
                        <span>
                          <p>
                            Aqui la imagen y la informacion
                          </p>
                          <GridItem xs={12} sm={12} md={8}>
                
                
                <center><Button color="danger">Precio S/.</Button></center>
                
              </GridItem>
                        </span>
                      )
                    },
                    {
                      tabButton: "Barman 4",
                      
                      tabContent: (
                        <span>
                          <p>
                             Aqui la imagen y la informacion
                          </p>
                          <GridItem xs={12} sm={12} md={8}>
                
                
                <center><Button color="default">Precio S/.</Button></center>
                
              </GridItem>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                     
                      
                      tabContent: (
                        
                          
                         <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Direccion:  "
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
                        
                      )
                    }
                   
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(Barman);
