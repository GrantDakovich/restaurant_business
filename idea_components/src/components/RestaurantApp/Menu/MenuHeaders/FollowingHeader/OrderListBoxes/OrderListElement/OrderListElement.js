import React, { Component } from 'react';
import styles from './OrderListElement.module.css';


class OrderListElement extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	

	render() {
		return (
			<div className={styles.OrderListElement}>
				&times; &nbsp;
				{this.props.name}
			</div>
		);
	}
}

export default OrderListElement;