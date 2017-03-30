import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

import ContactListItem from './ContactListItem'

let styles = {
	wrapper: {
		padding: 0
	},
};

class ContactList extends Component {

	contactList = this.props.contactList.map((contact) => {
		return <ContactListItem {...contact} key={contact.id}/>
	});

	render() {
		return (
			<Col md={12} className="list-group z-depth-1" style={styles.wrapper}>
				{this.contactList}
			</Col>
		);
	}
}

export default ContactList;
