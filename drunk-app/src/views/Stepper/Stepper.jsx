import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,Stepper,Step,StepLabel,Button,Paper,Typography, Radio,
  RadioGroup, FormControlLabel, FormControl, FormLabel,Card, CardMedia,
  CardContent, Grid, TextField} from 'material-ui';
import ItemGrid from "../../components/Grid/GridItem"

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  root2: {
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
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container : {
    width: '400px',
    paddingBottom : '30px'
  }
});

function getSteps() {
  return ['Seleccione un metodo de pago.', 'Complete el formulario.', 'Revise su boleta de pago.'];
}

class HorizontalLinearStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
    formaPago : 'tarjeta',
    value : 'tarjeta',
    nombre: '',
    telefono: '',
    direccion: '',
    fecha: ''
  };

  isStepOptional = step => {
    return step === 1;
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }
  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("");
    }
    const skipped = new Set(this.state.skipped.values());
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
//gestor de cambios:
  handleChange = event => {
    this.setState({ value: event.target.value, formaPago: event.target.value});
  };
  //manejador campos del formulario
  handleChange2 = event => { this.setState({ [event.target.name]: event.target.value });}
  
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, formaPago, value } = this.state;
    let getStepContent2, image, form = null
   
    if (formaPago == 'tarjeta'){
      form = (<div> Formulario de tarjeta </div>);
      image = ( <img 
        className= {classes.imageContainer}
        src="http://www.pokabroma.com/wp-content/uploads/2014/12/tarjetas.png" alt="not found"/>)
    }
    else if (formaPago == 'contrapaga') {
      form = (<div className={classes.container}>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <FormControl fullWidth>
              <TextField
                id="nombre"
                label="Nombre:"
                name="nombre"
                fullWidth
                margin="normal"
                onChange={this.handleChange2}
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
                onChange={this.handleChange2}
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
                onChange={this.handleChange2}
              />
            </FormControl>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <FormControl fullWidth>
            <TextField
             id="fecha"
             name="fecha"
             label="Fecha de entrega:"
             type="date"
             defaultValue="2018-05-24"
             InputLabelProps={{                                                 
              shrink: true,
            }}
            onChange={this.handleChange2}
            />
          </FormControl>
          </ItemGrid>
        </Grid>        
      </div>);
      image = (<img 
        className= {classes.imageContainer}
        src="https://ugc.kn3.net/i/origin/https://image.freepik.com/free-vector/cash-payment_23-2147511454.jpg" alt="not found"/>)
    }

    switch (activeStep) {
      case 0:
        getStepContent2 = (
          <div className={classes.root2}>
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
        ); break;
      case 1:
        getStepContent2 = form; break;
      case 2:
       getStepContent2 = (
        <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://static.vix.com/es/sites/default/files/styles/large/public/imj/errores-al-comprar-cerveza-1.png"
            title="Gracias por su compra."
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Total de su compra: 54.00 S/.
            </Typography>
            <Typography gutterBottom variant="headline" component="h4">
              Nombre : {this.state.nombre}
            </Typography>
            <Typography gutterBottom variant="headline" component="h4">
              Dirección : {this.state.direccion}
            </Typography>
            <Typography gutterBottom variant="headline" component="h4">
              Celular : {this.state.telefono}
            </Typography>
            <Typography gutterBottom variant="headline" component="h4">
              Fecha de entrega : {this.state.fecha}
            </Typography>
            <Typography component="p">
              Cualquier reclamo o consulta lo puede hacer a el teléfono de asistencia o en la sección de dudas y consultas de Drunk-pp
            </Typography>
          </CardContent>
        </Card>
      </div>
       )
      default:
         '';
    } 

    return (
      <Paper>
      <center>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Completaste todos los pasos, tu pedido esta en camino!!!!
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              { getStepContent2 } 
              <Typography className={classes.instructions}>
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Atrás
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </center>
      <br></br>
    </Paper>);
  }
}

export default withStyles(styles)(HorizontalLinearStepper);
