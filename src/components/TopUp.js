import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import axios from 'axios';

import Input from './utilities/Input';
import Button from './utilities/Button';
import Tile from './utilities/Tile';
import Form from './utilities/Form';


export default class extends Component {

	constructor(){
		super();

		this.state = {}

		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		
		axios.post('/topUp', this.state)
		.then((data) => this.setState({...this.state, topup: data.data}));
	}

	render() {
		return (
			<Tile wrap width={1} justify='center'>

				<Flex wrap justify='center' mb={3}>
					<Flex wrap justify='center'>
						<h4> TOP UP </h4>
					</Flex>
					<Flex width={1}>
						<a>This will top up your account by <strong>£10.00</strong></a>
					</Flex>
				</Flex>

				<Flex width={1}>

					<Form onSubmit={this.submitForm}>

						<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} 
						placeholder="Enter account ID"/>

						<Button type="submit"> Topup </Button>

					</Form>
				</Flex>
<p> {this.state.topup} </p>
			</Tile>
		)
	}
}