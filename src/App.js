import React, {Component} from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import CreateAccount from './components/CreateAccount';
import TopUp from './components/TopUp';
import GetBalance from './components/GetBalance';
import Transactions from './components/GetCharges';
import Accounts from './components/ListAccounts';
import siteLogo from './logo.png';

const Logo = styled.img`
    align-self: flex-start;
    max-height: 100px
` 

const Header = styled(Flex)`
	border-bottom: 5px solid #ef4136;
`

class App extends Component {
    render () {
        return (
        	<div className="App">
        		<Flex wrap width={1} align='flex-start' px={'20%'}>
        			<Header width={1} p={2}>
        				<Logo src={siteLogo}/>
        			</Header>
	        		<Flex wrap width={1/4} p={2}>
		        		<CreateAccount/>
		        		<Accounts/>
		        	</Flex>
		        	<Flex wrap width={1/2} p={2}>
		        		<Transactions/>
		        	</Flex>
		        	<Flex wrap width={1/4} p={2}>
		        		<GetBalance/>
		        		<TopUp/>
		        	</Flex>
	        	</Flex>
        	</div>
    	);
	}
}

export default App;