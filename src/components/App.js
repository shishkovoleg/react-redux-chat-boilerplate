import React, { Component } from 'react';
import ContactListWrapper from './ContactListWrapper';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
		<div className="container">
			<ContactListWrapper/>
			<Chat/>
		</div>
    );
  }
}

export default App;
