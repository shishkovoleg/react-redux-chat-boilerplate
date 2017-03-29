import React, { Component } from 'react';
import ContactList from './ContactList';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
		<div className="container">
			<ContactList/>
			<Chat/>
		</div>
    );
  }
}

export default App;
