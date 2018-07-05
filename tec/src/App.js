import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import classes from './App.css';
import Admin from './components/Admin/Admin'
import Home from './components/Home/Home';
import Navbar from './components/UI/Navbar/Navbar';
import Compra from './components/Compra/Compra';
import Contacto from './components/Contacto/Contacto';
import Login from './components/Login/Login';
import LoginAdmin from './components/Admin/LoginAdmin/LoginAdmin';

class App extends Component {
  render(){
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Navbar />
				
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/Contacto' component={Contacto} />
					
					<Route path='/Compra' component={Compra} />
					<Route path='/admin' component={Admin} />
					<Route path='/Login' component={Login} />
					<Route path='/LoginAdmin' component={LoginAdmin} />
					<Route render={() => <h1>Not found</h1>}/>
					
				</Switch>
			</div>
		</BrowserRouter>);
  }
}

export default App;
