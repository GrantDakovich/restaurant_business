import React, { Component } from 'react';

import styles from './BasicOrderPopup.module.css';


/* 
	props must have: 

	name:
	price:
	mods:
*/

class BasicOrderPopup extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	handleClick = () => {
		this.props.toggle();
	}
	
	render() {
		return (
			<div className={styles.BasicOrderPopup}>
				<div>
			    	<span onClick={this.handleClick}>&times;    </span>
			    	<p>I'm A Pop Up!!!</p>
			    </div>
			</div>
		);
	}
}

export default BasicOrderPopup;




































