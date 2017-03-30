import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import ChatMessageInput from './ChatMessageInput'
import MessageList from './MessageList'
import ChatHeader from './ChatHeader'

let styles = {
	marginTop: 10,
	paddingLeft: 0,
	paddingRight: 0
};

class Chat extends Component {
	render() {
		return (
			<Col xs={12} md={8} style={styles} className="z-depth-1">
				<ChatHeader/>
				<MessageList/>
				<ChatMessageInput/>
			</Col>
		);
	}
}

export default Chat;
