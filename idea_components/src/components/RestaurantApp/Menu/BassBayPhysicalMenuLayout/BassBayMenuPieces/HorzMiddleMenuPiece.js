import React, { Component } from 'react';

import styles from './MenuPiece.module.css';

import horzmiddle from './MenuImages/horzmiddle.png';
import OrderButton from './../../../../../StyledComponents/BasicOrderButton/BasicOrderButton.js';


class HorzMiddleMenuPiece extends Component {
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
			<div className={styles.MenuPiece} style={{width: "1000px"}}>
				<img src={horzmiddle}/>
				{/*Salad*/}
				<div style={{position: "absolute", top: "80px", left: "390px"}}><OrderButton name="Caesar Salad" price="0.01" callback={this.update}/></div>
				<div style={{position: "absolute", top: "160px", left: "390px"}}><OrderButton name="Iceberg Wedge Salad" price="0.01" callback={this.update}/></div>
				<div style={{position: "absolute", top: "80px", left: "940px"}}><OrderButton name="House Salad" price="0.01" callback={this.update}/></div>
				<div style={{position: "absolute", top: "160px", left: "940px"}}><OrderButton name="Kale Salad" price="0.01" callback={this.update}/></div>
				{/*Left side*/}
				<div style={{position: "absolute", top: "310px", left: "450px"}}><OrderButton name="Cheeseburger Deluxe" price="10.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "390px", left: "450px"}}><OrderButton name="Bacon Cheeseburger" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "465px", left: "450px"}}><OrderButton name="Jack's Gold Standard" price="13.95" callback={this.update}/></div>
				{/*Right side*/}
				<div style={{position: "absolute", top: "320px", left: "950px"}}><OrderButton name="Beer Cheese Soup" price="" callback={this.update}/></div>
				<div style={{position: "absolute", top: "380px", left: "950px"}}><OrderButton name="Baked French Onion" price="6.95" callback={this.update}/></div>
			</div>
		);
	}
}

export default HorzMiddleMenuPiece;





































