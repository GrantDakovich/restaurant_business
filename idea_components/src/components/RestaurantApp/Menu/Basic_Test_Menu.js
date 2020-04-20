import React, { Component } from 'react';
import MenuItem from './MenuItems/MenuItemBasic.js';
import styles from './Basic_Test_Menu.module.css';
import chicken from './../../assets/ChickenWings.png';
import spinach from './../../assets/SpinachDip.png';
import pretzel from './../../assets/Pretzel.png';
import MenuHeader from './MenuHeaders/Basic_Menu_Header.js';
/*

{
	item_name: (String),
	price: (Decimal),
	img_link: (link to img),
	description: (String)
}

*/

// Notes: 
// - split into starters, sides, meals, etc..
// - ability to have add-ons

class Basic_Test_Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					item_name: "Chicken Wings",
					price: "11.95",
					img_link: chicken,
					description: "Brewhouse original style, buffalo, teriyaki, chipotle bbq sauce or rub, celery, buttermilk ranch or bleu cheese dressing"
				},
				{
					item_name: "Spinach Artichoke Dip",
					price: "12.95",
					img_link: spinach,
					description: "Artichoke hearts, fresh spinach, cream  cheese, WI parmesan, warm bread"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				},
				{
					item_name: "Hot Buttered Pretzel",
					price: "12.95",
					img_link: pretzel,
					description: "1lb salted soft pretzel, Wisconsin cheese sauce, whole grain mustard"
				}
			]
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {

		const menuItemList = [];
		for (let i = 0; i < this.state.items.length; i++){
			let item_obj = this.state.items[i];
			const item_jsx = <div className={styles.item}><MenuItem item_name={item_obj.item_name} price={item_obj.price} img_link={item_obj.img_link} description={item_obj.description}/></div>;
			menuItemList.push(item_jsx);	
		}
		


		return (
				<div className={styles.BasicTestMenu}>
					<MenuHeader/>
					{menuItemList}
				</div>
		);
	}
}

export default Basic_Test_Menu;






