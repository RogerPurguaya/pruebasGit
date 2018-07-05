import React,{Component} from 'react';
import classes from './LoginAdmin.css';
import axios from '../../../axios-blog';
import img from '../../../assets/tecshop.png'

import NavbarItem from '../../UI/Navbar/NavbarItem/NavbarItem'
class LoginAdmin extends Component{
	render(){
		return (<div>
            <div  className={classes.modal}>
        <form className="modal-content animate" >
          <div className="imgcontainer">
            <img src={img}  className={classes.avatar} />
          </div>
      
          <div className={classes.container}>
            <label for="uname"><b>NOMBRE</b></label>
            <input type="text" placeholder="Ingrese su Nombre" />
      
            <label for="psw"><b>CONTRASEÑAS</b></label>
            <input type="password" placeholder="Ingrese su Contraseña" name="psw"  />
            <header>
            <nav className={classes.Navbar}>
                <ul className={classes.NavbarList}>
                    <NavbarItem
                        index={3}
                        to="/admin"
                        exact
                        label="GOOO!!" />   
                   
                    
                </ul>
            </nav>
            </header>
           
           
          </div>
      
         
        </form>
      </div>
      </div>
      );
	}
}

export default LoginAdmin;