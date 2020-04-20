import React, { Component } from 'react';
import styles from './MenuItemBasic.module.css'


import StyledButton from './../../../StyledComponents/Move-Click-Button/MoveClickButton.js';

/*

{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}

*/



class MenuItemBasic extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	
	render() {
		return (
				<div className={styles.menuItemContainer}>
					<div className={styles.menuItem}>
						<div className={styles.itemTitle}>{this.props.item_name}</div>
						<div className={styles.itemPrice}><span className={styles.dollarSign}>$</span>{this.props.price}</div>
						<div className={styles.itemDescription}>{this.props.description}</div>
						<div className={styles.imgContainer}>
							<img className={styles.image} src={this.props.img_link}/>
						</div>
						<div className={styles.button}><StyledButton/></div>
					</div>
				</div>

		);
	}
}

export default MenuItemBasic;












