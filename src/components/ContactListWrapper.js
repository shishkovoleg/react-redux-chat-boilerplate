import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

import ContactList from './ContactList'
import ContactListFilter from './ContactListFilter'

let styles = {
	wrapper: {
		padding: 0
	},
};

class ContactListWrapper extends Component {
	render() {
		return (
			<Col md={4} style={styles.wrapper}>
				<ContactListFilter/>
				<ContactList contactList={this.props.contactList}/>
			</Col>
		);
	}
}

export default ContactListWrapper;
