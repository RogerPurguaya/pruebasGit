import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios-blog';
import classes from './Compra.css';
import laptop01 from '../../assets/laptop01.jpg';



class Compra extends Component {
	
	
	

	
	render(){
		return ( <table width="539" height="448" border="0" align="center"> 
		<tr> 
		  <td width="533" height="444"> 
		  <form id="contacto" name="Contacto" method="post" action="admin"> 
			<table> 
			<tr> 
				
				<td>producto :</td> 
					<td><input type="text" /></td></tr> 
					<tr> 
				
				<td>precio</td> 
					<td><input type="text" /></td></tr> 
			<tr> 

				
	  <td>Nombre :</td> 
		  <td><input type="text" /></td></tr> 
		
			  <tr> 
			  <td>Apellido:</td>  
			  <td><input type="text"  /></td></tr> 
			  <tr> 
			  <td>Telefono:</td>  
			  <td><input type="text"  /></td></tr> 
			  <tr> 
			  <td>Email:</td>  
			  <td><input type="text"  /></td></tr> 
			  <tr> 
			  <td>Direccion:</td>  
			  <td><input type="text"  /></td></tr> 
			  <tr> 
			  <td>Comuna:</td>  
			  <td><input type="text"  /></td></tr> 
			  <tr> 
			  <td>Dejenos su Comentario:</td>  
			  <td><textarea name="comentario" rows="7" cols="40"></textarea></td></tr> 
			  <tr> 
			  <td colspan="2"><div align="center"> 
				<input name="Limpiar" type="reset" value="Limpiar" onclick = "Validar(this.form)" />           
				<input name="Enviar Pedido" type="submit" value="Enviar Pedido" /> 
				</div></td>  
			  </tr> 
		  </table> 
		  </form>    </td> 
		  </tr> 
	  </table> );
	}
}

export default Compra;