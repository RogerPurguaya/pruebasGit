import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,List,ListItem,ListItemText,ListSubheader,Avatar} from 'material-ui';
import ItemGrid from "../../components/Grid/GridItem"
import Grid from "../../components/Grid/GridContainer"
import CustomCard from "../../components/Card/CustomCard"
import ImageIcon from "@material-ui/icons/Image"
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
    margin: 'auto'
  },
  container :{
    height: '100%'
  }
});

class PinnedSubheaderList extends React.Component {


    render () {
    const { classes } = this.props;
    return(
      <div>
      <Grid content>
       <ItemGrid xs={12} sm={12} md={3}>
       <div className={classes.container}>
       <List className={classes.root} subheader={<li />}>
        {[0, 1, 2, 3, 4].map(sectionId => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`Sección: ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map((item, index) => (
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={`Producto ${index}`} secondary={`Descripcion ${index}`} />
              </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
       </div>
        
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={9}>
        <Grid content>
        <ItemGrid xs={12} sm={12} md={6}>
            <img src="http://3.bp.blogspot.com/-8yyjCb17bR0/VpOtBYvwvhI/AAAAAAAAA4w/RFKiszuNack/s1600/f1513_alhambra_reserva_1925.jpg" alt="not found" className={classes.imageContainer}/>
        </ItemGrid> 
        <ItemGrid xs={12} sm={12} md={6}>
         <div style = {{ marginTop: '25px' }}> <CustomCard /></div>
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