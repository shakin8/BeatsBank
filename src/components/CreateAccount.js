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
		
		axios.post('/createAccount', this.state)
		.then((data) => this.setState({...this.state, id: data.data.id}));
	}

	render() {
		return (
			<Tile wrap width={1} justify='center'>
				<Flex>
					<h4>CREATE ACCOUNT</h4>
				</Flex>
				<Flex wrap width={1} justify='center' mb={3}>
					<Form onSubmit={this.submitForm}>
						<Input onChange={(event) => this.setState({...this.state, email: event.target.value})} 
						placeholder="e.g. example@test.com"/>

						<Button type="submit"> Submit </Button>

					</Form>

					
				</Flex>

				<a> {this.state.id} </a>

			</Tile>
		)
	}
}