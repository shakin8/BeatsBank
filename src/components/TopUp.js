import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import axios from 'axios';

import Input from './utilities/Input';
import Button from './utilities/Button';
import Tile from './utilities/Tile';


export default class extends Component {

	constructor(){
		super();

		this.state = {}

		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();
		
		axios.post('/topUp', this.state)
		.then((data) => this.setState({...this.state, id: data.data.id}));
	}

	render() {
		return (
			<Tile wrap>
				<Flex width={1}>
					<h1> Top Up </h1>
				</Flex>

				<Flex width={1}>
					<form onSubmit={this.submitForm}>

						<p>£10.00</p>
						<label> Account </label>
						<Input onChange={(event) => this.setState({...this.state, email: event.target.value})} />

						<Button type="submit"> Topup </Button>

						<p> {this.state.id} </p>

					</form>
				</Flex>
			</Tile>
		)
	}
}