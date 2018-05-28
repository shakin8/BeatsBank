import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import axios from 'axios';

const Content = styled(Flex)`
	background-color: rgba(239,65,54,0.05);
`

export default class extends Component {

	render() {
		return (
			<Content wrap width={1} justify='center'>
				<h4>Transactions</h4>
			</Content>
		)
	}
}