import React, { Component } from 'react';
import styles from './Basic_Cart.module.css';
import cart_image from './bass_bay_brewhouse.png';

/*

{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}

*/



class Basic_Cart extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	
	render() {
		return (
			<div>
				<img width="200px" src={cart_image}/>
			</div>
		);
	}
}

export default Basic_Cart;





































