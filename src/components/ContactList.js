import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

import ContactListItem from './ContactListItem'

let styles = {
	wrapper: {
		padding: 10
	},
};

class ContactList extends Component {
	render() {
		return (
			<Col xs={12} md={4} className="list-group z-depth-1" style={styles.wrapper}>
				<ContactListItem/>
				<ContactListItem/>
				<ContactListItem/>
				<ContactListItem/>
			</Col>
		);
	}
}

export default ContactList;
