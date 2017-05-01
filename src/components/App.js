import React, { Component } from 'react';

import Contacts from '../containers/Contacts';
import Chat from '../components/Chat';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
		<div className="container">
			<Header/>
			<Contacts contactList={this.props.contactList}/>
			<Chat/>
		</div>
    );
  }
}

export default App;
