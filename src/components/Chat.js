import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import ChatMessageInput from './ChatMessageInput'
import MessageList from './MessageList'
import ChatHeader from './ChatHeader'

let styles = {
	marginTop: 10,
	paddingLeft: 6,
	paddingRight: 6
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
