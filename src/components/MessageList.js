import React, { Component } from 'react';
import Message from './Message';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		minHeight: 700
	}
};

class MessageList extends Component {
	render() {
		return (
			<div style={styles.wrapper} className="col-md-12">
				<Message/>
				<Message/>
				<Message/>
			</div>
		);
	}
}

export default MessageList;
