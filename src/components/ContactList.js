import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

import ContactListItem from './ContactListItem'

class ContactList extends Component {
	render() {
		return (
			<Col xs={12} md={4} className="list-group z-depth-1">
				<ContactListItem/>
				<ContactListItem/>
				<ContactListItem/>
				<ContactListItem/>
			</Col>
		);
	}
}

export default ContactList;
