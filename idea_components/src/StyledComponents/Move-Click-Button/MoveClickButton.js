import React, { Component } from 'react';
import styles from './MoveClickButton.module.css';


class MoveClickButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: "Add to Cart"
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		/*
		<div className={styles.btn}>
			<span>{this.state.buttonText}</span>
		</div>
		*/
	}
	
	render() {
		return (
			<div className={styles.btn}>
				<span>{this.state.buttonText}</span>
			</div>
		);
	}
}

export default MoveClickButton;












