import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReactDOM from 'react-dom';

import ContactListItem from '../components/ContactListItem';
import * as Actions from '../actions';

let styles = {
	wrapper: {
		padding: 0,
		overflowY: 'hidden',
		height: '80vh'
	},
};

class ContactList extends Component {

	static propTypes = {
		contactList: React.PropTypes.array,
		showScrollbar: React.PropTypes.bool
	};

	componentDidUpdate = () => {
		const {contactListBlock} = this.refs;

		ReactDOM.findDOMNode(contactListBlock).style.overflowY = this.props.showScrollbar ? 'auto' : 'hidden'
	};

	contactList = this.props.contactList.map((contact) => {
		return <ContactListItem {...contact} key={contact.id}/>
	});

	render() {
		const {hideContactScrollbar, showContactScrollbar} = this.props.actions;

		return (
			<Col md={12}
				 ref="contactListBlock"
				 onMouseOver={showContactScrollbar}
				 onMouseOut={hideContactScrollbar}
				 className="list-group"
				 style={styles.wrapper}>
				{this.contactList}
			</Col>
		);
	}
}

function mapStateToProps(state) {
	return {
		showScrollbar: state.contactList.showScrollbar,
		contactList: state.contactList.contactList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
