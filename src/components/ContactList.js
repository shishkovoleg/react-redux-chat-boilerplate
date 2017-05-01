import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import * as ReactDOM from 'react-dom';

import ContactListItem from '../components/ContactListItem';

let styles = {
	wrapper: {
		padding: 0,
		overflowY: 'hidden',
		height: '80vh'
	},
};

class ContactList extends Component {

	static propTypes = {
		contactsFiltered: React.PropTypes.array,
		showScrollbar: React.PropTypes.bool,
		showContactScrollbar: React.PropTypes.func,
		hideContactScrollbar: React.PropTypes.func,
	};

	componentDidUpdate = () => {
		const {contactListBlock} = this.refs;
		ReactDOM.findDOMNode(contactListBlock).style.overflowY = this.props.showScrollbar ? 'auto' : 'hidden'
	};

	contactList = () => {
		return this.props.contactsFiltered.map((contact) => {
			return <ContactListItem {...contact} key={contact.id}/>
		});
	};

	onMouseOverHandler(e) {
		this.props.showContactScrollbar(e);
	}

	onMouseOutHandler(e)	{
		this.props.hideContactScrollbar(e);
	}

	render() {
		return (
			<Col md={12}
				 ref="contactListBlock"
				 onMouseOver={event => this.onMouseOverHandler(event.target.value)}
				 onMouseOut={event => this.onMouseOutHandler(event.target.value)}
				 className="list-group"
				 style={styles.wrapper}>
				{this.contactList()}
			</Col>
		);
	}
}

export default ContactList;
