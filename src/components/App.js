import React, { Component } from 'react';
import {Col, Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import ContactList from './ContactList';
import Chat from './Chat';

var headerStyle = {
	fontSize: '16px',
	fontWeight: '300',
	display: 'inline-block',
	margin: '20px 10px'
};

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
