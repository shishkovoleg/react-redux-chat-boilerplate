import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import ChatMessageInput from './ChatMessageInput'
import MessageList from './MessageList'
import ChatHeader from './ChatHeader'

class Chat extends Component {
	render() {
		return (
			<Col xs={12} md={8} >
				<ChatHeader/>
				<MessageList/>
				<ChatMessageInput/>
			</Col>
		);
	}
}

export default Chat;
