import React, {Component} from 'react';

import CreateAccount from './components/CreateAccount';
import TopUp from './components/TopUp';


class App extends Component {
    render () {
        return (
        	<div className="App">
        		<CreateAccount/>
        		<TopUp/>
        	</div>
    	);
	}
}

export default App;