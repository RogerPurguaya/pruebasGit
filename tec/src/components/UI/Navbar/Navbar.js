import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';
import classes from './Navbar.css';
import imglogo from '../../../assets/tecshop.png'

const navbar = () => (<header>
    <nav className={classes.Navbar}>
        <ul className={classes.NavbarList}>
        <img src={imglogo} alt= "Tecshop" style={{
        float: 'right',
		maxHeight: '43px'
	}} />
            <NavbarItem
                index={0}
                to="/"
                exact
                label="TECSHOP" />
            <NavbarItem
                index={1}
                to="/"
                exact
                label="Inicio" />
            <NavbarItem
                index={2}
                to="/Compra"
                exact
                label="Carrito" />
           
            <NavbarItem
                index={4}
                to="/Contacto"
                label="Contacto" />
            <NavbarItem
                index={3}
                to="/Login"
                exact
                label="Login" />   
           
            
        </ul>
    </nav>
</header>);

export default navbar;