import React, { Component } from 'react';

import styles from './MenuPiece.module.css';

import bottom from './MenuImages/bottom.png';
import OrderButton from './../../../../../StyledComponents/BasicOrderButton/BasicOrderButton.js';


class BottomMenuPiece extends Component {
	constructor(props) {
		super(props);

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
			<div className={styles.MenuPiece} style={{width: "1040px"}}>
				<img src={bottom}/>
				{/*left side*/}
				<div style={{position: "absolute", top: "5px", left: "450px"}}><OrderButton name="The Hangover Burger" price="13.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "80px", left: "450px"}}><OrderButton name="Southern Fried Chicken" price="10.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "140px", left: "450px"}}><OrderButton name="Buffalo Chicken Sandwich" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "220px", left: "450px"}}><OrderButton name="Black Forest Ham Sandwich" price="11.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "295px", left: "450px"}}><OrderButton name="Spicy Chicken Panini" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "380px", left: "450px"}}><OrderButton name="Pan-Fried Cheese Sandwich" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "455px", left: "450px"}}><OrderButton name="Fish Sandwich" price="12.95" callback={this.update}/></div>

				{/*right side*/}
				<div style={{position: "absolute", top: "20px", left: "970px"}}><OrderButton name='"Beer Can" Chicken' price="18.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "77px", left: "970px"}}><OrderButton name="Seared Salmon" price="19.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "138px", left: "970px"}}><OrderButton name="Chicken Fried Chicken" price="17.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "200px", left: "970px"}}><OrderButton name="Pot Roast" price="18.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "275px", left: "970px"}}><OrderButton name="Roasted Mushroom Linguine" price="15.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "355px", left: "970px"}}><OrderButton name="Mac and Cheese" price="12.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "460px", left: "970px"}}><OrderButton name="Classic Wisconsin Fish Fry" price="14.95" callback={this.update}/></div>
			</div>
		);
	}
}

export default BottomMenuPiece;






































