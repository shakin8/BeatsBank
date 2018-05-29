import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import axios from 'axios';


import Button from './utilities/Button';
import Form from './utilities/Form';
import Input from './utilities/Input';

const Content = styled(Flex)`
	background-color: rgba(239,65,54,0.05);
`

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

      axios.post('/getCharges',this.state)
      .then((data) => 
      	this.setState({...this.state,
              charges: data.data
            })
  	);
    }

	render() {

		const { charges } = this.state
		const chargeList = charges.map(x => <Flex width={1} px={2}><Flex width={1/4} justify='flex-start'><a>£{(x.amount-50)/100}</a></Flex><Flex width={3/8} justify='center'><a>{x.id}</a></Flex><Flex width={3/8} justify='flex-end'><a>{x.statement_descriptor}</a></Flex></Flex>)

		return (
			<Content wrap width={1} justify='center' align='stretch' px={3} pb={3}>

				<Flex wrap width={1} justify='center' mb={3}>

					<Flex width={1} justify='center'>
						<h4> TRANSACTIONS </h4>
					</Flex>

				</Flex>

              	<Flex width={1} wrap pb={3} mb={3}>
              		{chargeList}
              	</Flex>

                <Flex width={1}>

                  	<Form onSubmit={this.submitForm}>
						<Input onChange={(event) => this.setState({...this.state, account: event.target.value})} 
						placeholder="Enter account ID"/>
						<Button type="submit"> Fetch Transactions </Button>
					</Form>

              	</Flex>

			</Content>
		)
	}
}