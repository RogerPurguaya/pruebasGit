import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,List,ListItem,ListItemText,ListSubheader,Avatar, CardMedia} from 'material-ui';
import ItemGrid from "../../components/Grid/GridItem"
import Grid from "../../components/Grid/GridContainer"
import CustomCard from "../../components/Card/CustomCard"
import ImageIcon from "@material-ui/icons/Image"
import Fono from "../../assets/img/fono.jpeg"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    height: 600,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  imageContainer : {
    width: '100%',
    height: '580px',
    marginTop: '25px',
    margin: 'auto',
    borderRadius:'15px 15px 15px 15px'
  },
  imageContainer2: {
    width: '100%',
    height: '120px',
    marginTop: '5px',
    marginBottom: '15px',
    margin: 'auto',
    borderRadius:'5px 5px 5px 5px'
  },
  container :{
    height: '100%',
    backgroundColor: '#509045'
  },
  titulo: {
      fontFamily: 'Berlin Sans FB',
      fontSize: '35px',
      color: '#EFF082'
  },
  media:{
    height: 0,
    paddingTop: '75.25%', // 16:9
    marginRight: '15px'
  }
});

class PinnedSubheaderList extends React.Component {


    render () {
    const { classes } = this.props;
    return(
      <div className={classes.container}>
      <Grid content>
       <ItemGrid xs={12} sm={12} md={3}>
       <div style={{padding: '5px'}}>
       <p className={classes.titulo}>Nuestra carta</p>
        <img src="https://static.iris.net.co/semana/upload/images/2016/10/8/498242_1.jpg" alt="not found"
        className={classes.imageContainer2}/>
        <p className={classes.titulo}>Nuevos productos</p>
        <img src="https://i0.wp.com/disevil.com/blog/wp-content/uploads/2017/06/Cremas-de-licor.jpg" alt="not found"
        className={classes.imageContainer2}/>
        <p className={classes.titulo}>Lo más pedido</p>
        <img src="https://static.iris.net.co/dinero/upload/images/2014/7/23/198985_174358_1.jpg" alt="not found"
        className={classes.imageContainer2}/>
       </div>
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={9}>
        <Grid content>
        <ItemGrid xs={12} sm={12} md={6}>
            <img src="http://3.bp.blogspot.com/-8yyjCb17bR0/VpOtBYvwvhI/AAAAAAAAA4w/RFKiszuNack/s1600/f1513_alhambra_reserva_1925.jpg" alt="not found" className={classes.imageContainer}/>
        </ItemGrid> 
        <ItemGrid xs={12} sm={12} md={6}>
         <div style = {{ marginTop: '25px' }}>
         <p className={classes.titulo}>BIENVENIDOS</p>
         <CardMedia
          className={classes.media}
          image={Fono}
        />
        <p style={{color: 'white'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit officiis maiores labore? Minima corrupti non asperiores, maxime deserunt debitis quia eos distinctio facilis magnam dignissimos porro nesciunt quam sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores fugiat aliquam provident dolor suscipit nemo? Nam, provident dolorem cumque saepe, incidunt totam nobis delectus quaerat doloremque impedit sint necessitatibus!
        </p>
         </div>
        </ItemGrid> 
        </Grid>
      </ItemGrid> 
      </Grid>
      </div>
    )
  }

}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);