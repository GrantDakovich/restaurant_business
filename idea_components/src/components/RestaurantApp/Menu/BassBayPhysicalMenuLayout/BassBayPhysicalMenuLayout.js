import React, { Component } from 'react';
import styles from './BassBayPhysicalMenuLayout.module.css';

import TopLeftMenuPiece from './BassBayMenuPieces/TopLeftMenuPiece.js'; 
import TopRightMenuPiece from './BassBayMenuPieces/TopRightMenuPiece.js'; 
import HorzMiddleMenuPiece from './BassBayMenuPieces/HorzMiddleMenuPiece.js'; 
import BottomMenuPiece from './BassBayMenuPieces/BottomMenuPiece.js'; 

import PopupViewer from './../Popups/PopupViewer.js';

class BassBayPhysicalMenuLayout extends Component {
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
			<div>

				<TopLeftMenuPiece callback={this.update}/>
				<TopRightMenuPiece callback={this.update}/>
				<HorzMiddleMenuPiece callback={this.update}/>
				<BottomMenuPiece callback={this.update}/>
				<PopupViewer className="this"/>
			</div>
		);
	}
}

export default BassBayPhysicalMenuLayout;





































