import React, {Component} from 'react';
import { Flex } from 'grid-styled';
import CreateAccount from './components/CreateAccount';
import TopUp from './components/TopUp';
import GetBalance from './components/GetBalance';


class App extends Component {
    render () {
        return (
        	<div className="App">
        		<Flex width={1}>
	        		<Flex width={1/2}>
		        		<CreateAccount/>
		        	</Flex>
		        	<Flex wrap width={1/2}>
		        		<GetBalance/>
		        		<TopUp/>
		        	</Flex>
	        	</Flex>
        	</div>
    	);
	}
}

export default App;