import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import Input from './utilities/Input';
import Button from './utilities/Button';
import axios from 'axios';

import Tile from './utilities/Tile';


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
			<Tile wrap>
                  <Flex width={1}>
                      <form onSubmit={this.submitForm}>
						<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} />
						<Button type="submit"> Topup </Button>
                      <p> £{this.state.available / 100} available</p>
                      <p> £{this.state.pending / 100} pending</p>
					</form>
                  </Flex>
			</Tile>
		)
	}
}