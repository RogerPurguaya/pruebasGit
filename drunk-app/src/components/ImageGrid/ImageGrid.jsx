import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import image1 from "../../images/001.JPG"
import image2 from "../../images/002.JPG"
import image3 from "../../images/003.JPG"
import image4 from "../../images/004.JPG"
import image5 from "../../images/005.JPG"
import image6 from "../../images/006.JPG"
import image7 from "../../images/007.JPG"
import image8 from "../../images/008.JPG"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 260,
  },
  subheader: {
    width: '100%',
  },
});
 
 const tileData = [
   {
     img: image1,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: image2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image4,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image6,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: image7,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image8,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
   
 ];
 
function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);