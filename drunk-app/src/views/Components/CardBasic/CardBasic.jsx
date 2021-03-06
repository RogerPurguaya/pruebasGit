import React from 'react';
import PropTypes from 'prop-types';
/* import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; */

import {
Card,
CardActions,
CardContent,
Button,
Typography,
withStyles
} from "material-ui"

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           {props.titulo}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Contenido Extra
          </Typography>
          <Typography variant="headline" component="h4">
            Descripción:
          </Typography>
          <Typography component="p">
            {props.descripcion}
          </Typography>
          <Typography variant="headline" component="h4">
            Contacto:
          </Typography>
          <Typography component="p">
            Aqui va la info de contacto.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Mas Info.</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);