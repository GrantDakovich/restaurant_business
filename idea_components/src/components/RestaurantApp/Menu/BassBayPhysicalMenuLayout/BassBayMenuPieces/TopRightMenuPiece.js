import React, { Component } from 'react';

import styles from './MenuPiece.module.css';

import topright from './MenuImages/topright.png';

import OrderButton from './../../../../../StyledComponents/BasicOrderButton/BasicOrderButton.js';


class TopRightMenuPiece extends Component {
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
			<div className={styles.MenuPiece} style={{width: "630px"}}>
				<img src={topright}/>
				<div style={{position: "absolute", top: "205px", left: "560px"}}><OrderButton name="Pulled Ham Poutine Fries" price="11.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "270px", left: "560px"}}><OrderButton name="Pulled Pork Fries" price="11.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "340px", left: "560px"}}><OrderButton name="Buffalo Chicken Fries" price="11.95" callback={this.update}/></div>
				<div style={{position: "absolute", top: "410px", left: "560px"}}><OrderButton name="Chili Cheese Fries" price="11.95" callback={this.update}/></div>
			</div>
		);
	}
}

export default TopRightMenuPiece;





































