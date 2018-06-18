import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,
  AppBar,
  Tabs,
  Tab,
  HomeTab,
  LocalesTab} from 'material-ui';

function TabContainer(props) {
  let content = null
    switch (props.children) {
        case 'Inicio':
          content = (<HomeTab />)
        break;
        case 'Productos':
         // content = (<ProductosTab />)
        break;
        case 'Promociones':
         // content = (<PromocionesTab />)
        break;
        case 'Locales':
           content = (<LocalesTab />)
        break;
      default:
        break;
    }
  console.log(props.children)
  return (<div>
    {content}
  </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Inicio" />
            <Tab label="Productos" />
            <Tab label="Promociones" />
            <Tab label="Locales" />
            <Tab label="Otros Servicios" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Inicio</TabContainer>}
        {value === 1 && <TabContainer>Productos</TabContainer>}
        {value === 2 && <TabContainer>Promociones</TabContainer>}
        {value === 3 && <TabContainer>Locales</TabContainer>}
        {value === 4 && <TabContainer>Otros Servicios</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);