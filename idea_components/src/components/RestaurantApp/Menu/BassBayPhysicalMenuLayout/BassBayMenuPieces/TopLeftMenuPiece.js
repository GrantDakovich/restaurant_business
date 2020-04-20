import React, { Component } from 'react';

import styles from './MenuPiece.module.css';

import topleft from './MenuImages/topleft.png';
import OrderButton from './../../../../../StyledComponents/BasicOrderButton/BasicOrderButton.js';


class TopLeftMenuPiece extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price_from_menu_piece: 0
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	update = (item_name, price) => {
		this.props.callback(item_name, price);
	}
	
	render() {
		return (
			<div className={styles.MenuPiece} style={{width: "500px", float: "left"}}>
				<img src={topleft}/>		
				<div style={{position: "absolute", top: "160px", left: "440px"}}><OrderButton name="Chicken Wings" price="11.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "250px", left: "440px"}}><OrderButton name="Spinach Artichoke Dip" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "330px", left: "440px"}}><OrderButton name="Hot Buttered Pretzel" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "425px", left: "440px"}}><OrderButton name="Onion Rings" price="8.95" callback={this.update}/></div>
			</div>
		);
	}
}

export default TopLeftMenuPiece;





































