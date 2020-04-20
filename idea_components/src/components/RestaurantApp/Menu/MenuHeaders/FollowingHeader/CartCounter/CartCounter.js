import React, { Component } from 'react';
import styles from './CartCounter.module.css';

import Counter from './Counters/CircleCounter.js';
import PriceViewer from './PriceViewers/PriceViewer.js';


class CartCounter extends Component {
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
		return (
			<div className={styles.CartCounter}>
				<Counter items={this.state.items}/>
				<PriceViewer price={this.state.price}/>
			</div>
		);
	}
}

export default CartCounter;





































