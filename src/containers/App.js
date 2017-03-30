import React, { Component } from 'react';
import {connect} from 'react-redux';

import ContactListWrapper from '../components/ContactListWrapper';
import Chat from '../components/Chat';

class App extends Component {
  render() {
    return (
		<div className="container">
			<ContactListWrapper contactList={this.props.contactList}/>
			<Chat/>
		</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		contactList: state.contactList
	};
}

export default connect(mapStateToProps)(App);
