import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import Input from './utilities/Input';
import axios from 'axios';

import Button from './utilities/Button';
import Tile from './utilities/Tile';
import Form from './utilities/Form';



export default class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        available: 0,
        pending: 0
      }
      this.submitForm = this.submitForm.bind(this);
    }

	submitForm(e) {
		e.preventDefault();

      axios.post('/getBalance',this.state)
      .then((data) => this.setState({...this.state,
        available: data.data.available[0].amount,
        pending: data.data.pending[0].amount
      }));
    }

	render() {
		return (
			<Tile wrap width={1} justify='center'>

				<Flex wrap justify='center' mb={3}>

					<Flex width={1} justify='center'>
						<h4> BALANCE </h4>
					</Flex>

					<Flex width={1/2} justify='center'>
	                  <a> <strong>£{this.state.available / 100}</strong> <small>available</small></a>
	                 </Flex>

	                <Flex width={1/2} justify='center'>
	                  <a> <strong>£{this.state.pending / 100}</strong> <small>pending</small></a>
					</Flex>

				</Flex>

                <Flex width={1}>

                  	<Form onSubmit={this.submitForm}>
						<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} 
						placeholder="Enter account ID"/>
						<Button type="submit"> Get Balance </Button>
					</Form>

              	</Flex>

			</Tile>
		)
	}
}