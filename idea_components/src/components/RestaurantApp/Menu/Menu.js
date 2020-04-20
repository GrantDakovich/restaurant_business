import React, { Component } from 'react';
import MenuItemBasic from './MenuItems/MenuItemBasic.js';

/*

{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}

*/

class Menu extends Component {
	render() {
		return (
			<div>
				Menu Component:
				<MenuItemBasic item_name="Beef Tacos" price="6.70" img_link="" description="fewfwefewoenfe"/>
				<table>
					
				</table>
			</div>
		);
	}
}

export default Menu;















