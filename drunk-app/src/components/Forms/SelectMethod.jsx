import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel } from 'material-ui';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '400px',
    margin:'auto'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  imageContainer : {
      width: '200px',
      height: '150px'
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'tarjeta'
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    //this.props.handleFormaSelected(event.target.value)
    console.log(this.props)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    let image = null

    if (value == 'tarjeta') {
        image = ( <img 
            className= {classes.imageContainer}
            src="http://www.pokabroma.com/wp-content/uploads/2014/12/tarjetas.png" alt="not found"/>)
    } else {
        image = (<img 
                className= {classes.imageContainer}
                src="https://ugc.kn3.net/i/origin/https://image.freepik.com/free-vector/cash-payment_23-2147511454.jpg" alt="not found"/>)
    }
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Método de pago</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="tarjeta" control={<Radio color='primary'/>} label="Tarjeta de crédito" />
            <FormControlLabel value="contrapaga" control={<Radio color='primary'/>} label="Contrapaga" />
          </RadioGroup>
        </FormControl>
        <div>{image}</div>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);