import React, { Component } from 'react';

import styles from './BasicOrderButton.module.css';


/* 
	props must have: 

	name:
	price:
	mods:
*/

class BasicOrderButton extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	onClick = () => {
		this.props.callback(this.props.name, this.props.price);
	}
	
	render() {
		return (
			<div onClick={this.onClick} className={styles.BasicOrderButton}>
				<span>Order</span>
			</div>
		);
	}
}

export default BasicOrderButton;




































