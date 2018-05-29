import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import axios from 'axios';


import Button from './utilities/Button';
import Tile from './utilities/Tile';
import Form from './utilities/Form';
import Input from './utilities/Input';


export default class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        charges: []
      }
      this.submitForm = this.submitForm.bind(this);
    }

	submitForm(e) {
		e.preventDefault();

      axios.post('/listAccounts',this.state)
      .then((data) => 
      	this.setState({...this.state,
              charges: data.data
            })
  	);
    }

	render() {

		const { charges } = this.state
		const chargeList = charges.map(x => <Flex width={1}><a>{x.id}</a></Flex>)

		return (
			<Flex wrap width={1} justify='center' align='stretch'>

				<Flex wrap width={1} justify='center' mb={3}>

					<Flex width={1} justify='center'>
						<h4> ACCOUNTS </h4>
					</Flex>

				</Flex>

              	<Flex width={1} wrap pb={3} mb={3}>
              		{chargeList}
              	</Flex>

                <Flex width={1}>

                  	<Form onSubmit={this.submitForm}>
						<Button type="submit"> List Accounts </Button>
					</Form>

              	</Flex>

			</Flex>
		)
	}
}