import React, { Component } from 'react';
import styles from './CircleCounter.module.css';



class CircleCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: this.props.items
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	componentWillReceiveProps(nextState) {
		if (this.state.items.length != nextState.items.length) {
			this.setState({items: nextState.items});
		}
		
		//this.setState({...this.state, nextState.price})
	}
	
	render() {
		return (
			<div className={styles.CircleCounter}>
				<span>{this.state.items.length}</span>
			</div>
		);
	}
}

export default CircleCounter;
