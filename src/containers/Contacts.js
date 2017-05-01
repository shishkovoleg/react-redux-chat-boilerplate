import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactList from '../components/ContactList';
import ContactListFilter from '../components/ContactListFilter'
import * as Actions from '../actions';

let styles = {
	wrapper: {
		padding: 0
	},
};

class Contacts extends Component {
	render() {
		return (
			<Col md={4} style={styles.wrapper}>
				<ContactListFilter filterContactList={param => this.props.actions.filterContactList(param)}/>
				<ContactList
					contactsFiltered={this.props.contactsFiltered}
					showScrollbar={this.props.showScrollbar}
					showContactScrollbar={e => this.props.actions.showContactScrollbar(e)}
					hideContactScrollbar={e => this.props.actions.hideContactScrollbar(e)}
				/>
			</Col>
		);
	}
}

function mapStateToProps(state) {
	return {
		showScrollbar: state.contactList.showScrollbar,
		contactsFiltered: state.contactList.contactsFiltered
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
