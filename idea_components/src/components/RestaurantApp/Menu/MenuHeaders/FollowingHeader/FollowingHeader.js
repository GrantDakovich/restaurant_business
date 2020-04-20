import React, { Component } from 'react';
import styles from './FollowingHeader.module.css';

import CartCounter from './CartCounter/CartCounter.js';
import OrderListBox from './OrderListBoxes/OrderListBox.js';


class FollowingHeader extends Component {
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

	completeOrder = () => {
		this.props.completeOrderCallback();
	}	

	render() {
		return (
			<div className={styles.FollowingHeader}>
				<OrderListBox price={this.state.price} items={this.state.items}/>
				<div style={{position: "relative", float: "right"}}>
					<CartCounter price={this.state.price} items={this.state.items}/>
				</div>
				<button style={{float: "right"}} onClick={this.completeOrder}>Complete Order</button>
			</div>
		);
	}
}

export default FollowingHeader;





































