import React, { Component } from 'react';
import styles from './OrderListBox.module.css';

import OrderListElement from './OrderListElement/OrderListElement.js';

class OrderListBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price: this.props.price,
			items: this.props.items
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	componentWillReceiveProps(nextState) {
		if (this.state.price != nextState.price) {
			this.setState({price: nextState.price, items: nextState.items});
		}
		
		//this.setState({...this.state, nextState.price})
	}

	

	render() {
		const elementArr = [];
		for (let i = 0; i < this.state.items.length; i++) {
			elementArr.push(<OrderListElement name={this.state.items[i]}/>);
		}
		return (
			<div className={styles.OrderListBox}>
				{elementArr}
			</div>
		);
	}
}

export default OrderListBox;





































