import React, { Component } from 'react';
import Message from './Message';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		minHeight: 700,
		borderLeft: '1px solid #dddddd',
		borderRight: '1px solid #dddddd',
		borderBottom: '1px solid #dddddd',
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
