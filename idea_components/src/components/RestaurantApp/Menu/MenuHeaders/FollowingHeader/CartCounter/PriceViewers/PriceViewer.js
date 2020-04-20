import React, { Component } from 'react';
import styles from './PriceViewer.module.css';



class PriceViewer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price: this.props.price
		}
	}


	componentDidMount() {

	}

	componentWillUnmount() {

	}

	componentWillReceiveProps(nextState) {
		if (this.state.price != nextState.price) {
			this.setState({price: nextState.price});
		}
		
		//this.setState({...this.state, nextState.price})
	}
	
	render() {
		return (
			<div className={styles.PriceViewer}>
				<span style={{fontFamily: "arial"}}>$&nbsp;</span>
				<span>{this.state.price}</span>
			</div>
		);
	}
}

export default PriceViewer;