import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import paypal from "assets/img/paypal.png";
import culqi from "assets/img/culqii.png";
import efectivo from "assets/img/efectivo.jpg";


class FormasPago extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h1><center><b>Formas de Pago</b></center></h1>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <h3><b>Paypal</b></h3>
                <img
                  src={efectivo}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Pagar ahora</Button></center>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <h3><b>Culqi</b></h3>
                <img
                  src={efectivo}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Pagar ahora</Button></center>
              </GridItem>

              <GridItem xs={12} sm={4}>
                <h3><b>Pagar en Efectivo</b></h3>
                <img
                  src={efectivo}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <center><Button color="danger">Pagar ahora</Button></center>
              </GridItem>
              
             
              
            </GridContainer>
            
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(FormasPago);
