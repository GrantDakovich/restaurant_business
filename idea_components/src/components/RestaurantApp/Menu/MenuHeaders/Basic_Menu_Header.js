import React, { Component } from 'react';
import styles from './Basic_Menu_Header.module.css';

import Cart from './Cart/Basic_Cart.js';

/*

{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}

*/



class Basic_Menu_Header extends Component {
	constructor(props) {
		super();

		this.state = {
			restaurant_name: "Bass Bay Brewhouse",
		};

	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}


	
	render() {
		return (
			<div className={styles.BasicMenuHeader}>
				<Cart/>
				{this.state.restaurant_name}
			</div>
		);
	}
}

export default Basic_Menu_Header;





































