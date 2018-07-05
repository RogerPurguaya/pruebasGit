import React,{Component} from 'react';
import classes from './Home.css';
import axios from '../../axios-blog';
import laptop01 from '../../assets/laptop01.jpg'

const Producto = (props) => {
	return (<div className={classes.product_item} category="laptops">
		<img src={laptop01} alt="" />
		<a href="/">{props.name}</a>
		<p>{props.description}</p>
		<button href="/">Comprar</button>
	</div>)
}

class Home extends Component{
	state = {
		products: []
	}
	componentDidMount(){
		axios.get('/products')
			.then(response => {
				console.log('productos',response.data.products)
				this.setState({products: response.data.products})
			})
	}
	render(){
		return (<div className={classes.home}>

			<div className={classes.wrap}>
			<h1>PRODUCTOS</h1>
			<div className={classes.store_wrapper}>
				<div className={classes.category_list}>
					<a href="/" className={classes.category_item} category="all">Todo</a>
					<a href="/" className={classes.category_item} category="ordenadores">Ordenadores</a>
					<a href="/" className={classes.category_item} category="laptops">Laptops</a>
					<a href="/" className={classes.category_item} category="smartphones">Smartphones</a>
					<a href="/" className={classes.category_item} category="monitores">Monitores</a>
					<a href="/" className={classes.category_item} category="audifonos">Audifonos</a>
				</div>
				<section className={classes.products_list}>
					{this.state.products.map(item => (<Producto
						key={item._id}
						name={item.name}
						description={item.description} />))}
				</section>
			</div>
		</div>
	</div>);
	}
}

export default Home;