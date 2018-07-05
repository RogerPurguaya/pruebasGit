import React from 'react';
import classes from './Admin.css';
import axios from "../../axios-blog";

export default class admin extends React.Component {

  state = {
    products: null,
    categories: null,
    category: {
      name: '',
      description: ''
    },
    product: {
      _id:'',
      name: '',
      price: '',
      category: '',
      stock: '',
      description: '',
      image: null
    },
    user: {
      name: '',
      email: '',
      password: ''
    },
    modeSend :'insert'
  }

  componentDidMount () {

    this.cargarData()
  
  }
 
cargarData = () => {
  axios.get("/products",{
    'Content-Type': 'application/json'
  })
  .then(response => {
    console.log(response.data)
    this.setState({
      products: response.data.products
    })
  })
  .catch(err => {
    console.log(err)
  })

  axios.get("/categories",{
    'Content-Type': 'application/json'
  })
  .then(response => {
    console.log(response.data)
    this.setState({
      categories: response.data.categories
    })
  })
  .catch(err => {
    console.log(err)
  })
}


handleChangeProduct = (event) => {
  let product = this.state.product
  product[event.target.name] = event.target.value
  this.setState({ product : {...product}})
}

onFileChange = (event) => {
  let file = event.target.files[0]
  let product = this.state.product
  product['image'] = file
  this.setState({
    product :  {...product} 
  })
}

//envio de formulario:
  //manjador para envío post del formulario.
  onSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData()
    let { product} = this.state
    formData.append('name', product.name)
    formData.append('category', event.target.category.value)
    formData.append('description', product.description)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    formData.append('image', product.image, product.image.name)
    let config = { 'accept': 'application/json','Content-Type': `multipart/form-data`} 
   
    if (this.state.modeSend === 'insert') {
      axios.post('/product',formData,config)
      .then((response)  => {
        console.log(response.data)
        this.cargarData()
      })
      .catch((error) =>  {
        console.log(error);
      }); 
    }
    else if(this.state.modeSend === 'update'){
      axios.put('/product/'+product._id,formData,config)
      .then((response)  => {
        console.log(response.data)
        this.cargarData()
      })
      .catch((error) =>  {
        console.log(error);
      }); 
    }
 } 

 deleteClickButton = (id) => {
  let config = { 'accept': 'application/json'}
  axios.delete('/product/'+id, config)
  .then(response => {
    console.log(response)
    this.cargarData()
  })
  .catch(err => {
    console.log(err)
  })
 }

 updateClickButton = (item) => {
  let update = this.state.product
  update._id = item._id
  update.category = item.category._id
  update.description = item.description
  update.price = item.price
  update.stock = item.stock
  update.name = item.name
   this.setState({
     product: update,
     modeSend: 'update'
   }) 
 }

  cambiarInputCategoria = (event,campo) => {
    this.setState({
      categoria: {
        ...this.state.categoria,
        [campo]: event.target.value
      }
    });
  }

  crearCategoria = (event) => {
    event.preventDefault();
    const data = this.state.categoria;
    console.log('data de categoria',data)
    axios.post("/category",data)
    .then(response => {
      console.log('refresca',response.data)
      //
     this.cargarData()
    })
    .catch(err => {
      console.log(err)
    })
  }

  cambiarInputProducto = (event,campo) => {
    this.setState({
      producto: {
        ...this.state.producto,
        [campo]: event.target.value
      }
    });
  }

  crearProducto = (event) => {
    event.preventDefault();
    const data = this.state.producto;
    //console.log('data de producto',data)
    axios.post("/product",data)
    .then(response => {
      console.log('refresca',response.data)
      //
     this.cargarData()
    })
    .catch(err => {
      console.log(err)
    })
  }




  render(){
    if (this.state.products == null) {
      return (<div>
        Cargando...
      </div>)
    }


    return (<div>
 
      <div className={classes.form_style_3}>
        <form className={classes.usuarioss} onSubmit={this.crearUsuario}>
          <fieldset><legend>Usuarios</legend>
            <label ><span>Nombre <span></span></span>
              <input type="text"    />
            </label>
            <label ><span>Email <span></span></span>
              <input type="email"   />
            </label>
            <label ><span>password <span></span></span>
              <input type="text"   />
            </label>
            <label ><span>Permisos</span>
              <select >
                <option value="Appointment">Admin</option>
                <option value="Interview">Usuario normal</option>
              </select>
            </label>
            <label><span>&nbsp;</span>
              <input type="submit" value="Crear" />
            </label>
          </fieldset>
        </form>
        <form className={classes.categoriass} onSubmit={this.crearCategoria}>
          <fieldset><legend>Categoria</legend>
          <label ><span>Nombre <span></span></span>
            <input type="text"
              value={this.state.category.name}
              onChange={(event) => this.cambiarInputCategoria(event,'name')} />
          </label>
          <label><span>Descripcion<span className={classes.required}></span></span>
            <input type="text"  
              value={this.state.category.description}
              onChange={(event) => this.cambiarInputCategoria(event,'description')} />
          </label>
      
          <label><span>&nbsp;</span><input type="submit" value="Crear" /></label>
          </fieldset>
        </form>


<div className={classes.form_style_3}>
          <form className={classes.productoss} onSubmit={this.onSubmit} encType='multipart/form-data'>
          <fieldset><legend>Producto</legend>
            <label><span>Nombre <span className={classes.required}></span></span>
              <input type="text"  
                value={this.state.product.name}
                name='name'
                onChange={this.handleChangeProduct} />
            </label>
            <label><span>Precio <span className={classes.required}></span></span>
              <input type="text"  
                value={this.state.product.price}
                name='price'
                onChange={this.handleChangeProduct} />
            </label>

            <label><span>Categoría</span>
              <select
              onChange={this.handleChangeProduct}
              name='category' 
                >
                {(this.state.categories!==null)?this.state.categories.map((item,i) => (
                <option key={i} defaultValue={item._id} value={item._id}>{item.name}</option>)):null}
              </select>
            </label>

            <label><span>Cantidad <span className={classes.required}></span></span>
              <input type="text"   
              value={this.state.product.stock}
              name='stock'
              onChange={this.handleChangeProduct} />
            </label>

            <label><span>Descripción <span className={classes.required}></span></span>
              <input type="text"  name="field2" 
                value={this.state.product.description}
                name='description'
                onChange={this.handleChangeProduct} />
            </label>

            <label className={classes.imgs}><span>Imagen <span className={classes.required}></span></span>
              <input type="file" name="image" accept="image/"
              onChange={this.onFileChange}
              />
            </label>
            <label><span>&nbsp;</span></label>
            { this.state.modeSend === 'insert' ? (<button className="btn btn-success" type="submit">Crear</button>) : (<button className="btn btn-warning" type="submit">Actualizar</button>) }
          </fieldset>
        </form>
          </div>



      </div>
      
      <div className={classes.listUsuario} >
      <h1>Usuarios</h1>
      <form>
      <table>
        <tr>
          
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>password</th>
          <th>password</th>
          <th>Permisos</th>
        </tr>
        <tr>
          <th>1</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><input type="button" 
              value="Eliminar"
              /></td>
          <td><button>Editar</button></td>
        </tr>
       
      
      </table></form>
      
      </div>
      <h1>Productos</h1>
      <div className={classes.listProducto}>
      <form>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Cantidad</th>
          <th>Imagen</th>
          <th>Descripción</th>
          <th colSpan="2">Acciones</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.products.map((item, index) => {
            return(<tr key={index}>

              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category?item.category.name:null}</td>
              <td>{item.stock}</td>
              <td>{item.image}</td>
              <td>{item.description}</td>
              <td><input type="button" className="btn btn-danger" 
                  value="Eliminar"
                  onClick={() => this.deleteClickButton(item._id)}/></td>
              <td><input type="button" className="btn btn-success" 
                  value="Editar"
                  onClick={() => this.updateClickButton(item)}/></td>
            </tr>)
          })
        }
        </tbody>
      </table>      
      </form>
      </div>
      <h1>Categorias</h1>
      <div className={classes.listCategoria}>
      <form>
      <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
        {(this.state.categories!==null)?this.state.categories.map((items, indexx) => {
          return (<tr key={indexx}>
          
         <td>{items._id}</td>
         <td>{items.name}</td>
         <td>{items.description}</td>
         <td><input type="button" 
              value="Eliminar"
              /></td>
         <td><button>Editar</button></td>
       </tr>) }):null
    }
       
       
      </table>
      
      </form>
      </div>
        
          </div>);
  }

}

