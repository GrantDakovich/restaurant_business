import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styles from './RestaurantApp.module.css';

import MenuLayout from './Menu/BassBayPhysicalMenuLayout/BassBayPhysicalMenuLayout.js';
import Header from './Menu/MenuHeaders/FollowingHeader/FollowingHeader.js';

import axios from 'axios';

class RestaurantApp extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			price: 0,
			items: []
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	update = (item_name, price) => {
		var old_price = this.state.price
		var new_price = parseFloat(old_price) + parseFloat(price);
		new_price = new_price.toFixed(2);

		this.setState({items: [...this.state.items, item_name]}, () => {
			this.setState({price: new_price}, () => {
				//alert(this.state.items);
				//alert(this.state.price);
			});
		});
	}

	completeOrder = () => {
		alert("Please pay: " + this.state.price);
		// Build customer object
		/*
			customer_obj: {
				customer_type: ("restaurant"),
				business_name: "test",
				time_sent: INT,
				time_checked: null,
				data: [
				// If a menu //
					{
						order_number: 1,
						item_id: 21938,
						modifications: {
							
						}	
					}
				]
			}
		*/
		var time = (new Date()).getTime();
		const customer_obj = {
			customer_type: "restaurant",
			business_name: "test",
			time_sent: time,
			time_checked: null,
			data: [
				{
					order_number: 1,
					item_id: 21938,
					modifications: {
					}
				}
			]
		}


		axios.post("http://localhost:7000/receive_customer_order", customer_obj)
			.then(function (response) {
	    		console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	
	render() {
		return (
			<BrowserRouter>
				<div className={styles.RestaurantApp}>
					<Header price={this.state.price} items={this.state.items} completeOrderCallback={this.completeOrder}/>
			    	<div style={{position:"relative", top: "120px", paddingLeft: "30px"}}>
			    		<MenuLayout callback={this.update}/>
			    	</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default RestaurantApp;


