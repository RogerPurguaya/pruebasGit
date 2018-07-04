import React from "react";

import classNames from "classnames";

import { Link } from "react-router-dom";
// material-ui componentes
import withStyles from "material-ui/styles/withStyles";

import FormasPago from "./Sections/FormasPago.jsx";
import Bartman from "./Sections/Bartman.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
      

       <FormasPago />
       <Bartman />
         
        

       
          
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
