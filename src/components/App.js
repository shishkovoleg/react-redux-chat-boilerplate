import React, { Component } from 'react';

import Contacts from '../containers/Contacts';
import Chat from '../components/Chat';

class App extends Component {
  render() {
    return (
		<div className="container">
			<Contacts contactList={this.props.contactList}/>
			<Chat/>
		</div>
    );
  }
}

export default App;
