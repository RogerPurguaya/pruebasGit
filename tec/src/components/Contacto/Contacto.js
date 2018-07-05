import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios-blog.js';
import classes from './Contacto.css';

class Contacto extends Component {

	render() {
		let redirect = null;
		
		return (<div><form className={classes.contacto}>
		<div><label>Tu Nombre:</label><input type='text' value=''/></div>
		<div><label>Tu Email:</label><input type='text' value=''/></div>
		<div><label>Asunto:</label><input type='text' value=''/></div>
		<div><label>Mensaje:</label><textarea rows='6'></textarea></div>
		<div><input type='submit' value='Envia Mensaje'/></div>

			
		<p>contatenos: 987654321</p>
			</form>
			<form>
					<div >
			
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.914054382167!2d-71.52190838557645!3d-16.429190788659422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b23fcffffff%3A0xf3a2f908ae973204!2sTecsup!5e0!3m2!1ses!2spe!4v1530404360586" 
			width="1200" height="600" frameborder="0"  allowfullscreen></iframe>
		</div>
			</form></div>
		);
	}
}

export default Contacto;