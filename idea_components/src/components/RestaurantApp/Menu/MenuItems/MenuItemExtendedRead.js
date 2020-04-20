import React, { Component } from 'react';
import './MenuItemExtendedReadDesign1.css';

/*


{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}


*/



class MenuItemExtendedRead extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}
	
	render() {
		return (
			<div>
				MenuItemExtendedRead Div: <br/>
				<img className="menuItemImage" src={this.props.img_link}/>
				<div className="descriptionDiv">{this.props.description}</div>
				<button type="button" class="collapsible"><span>{this.props.item_name}</span><span>{this.props.price}</span></button>
			</div>
		);
	}
}

export default MenuItemExtendedRead;












