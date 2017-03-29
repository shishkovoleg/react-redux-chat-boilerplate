import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		height: 90,
		paddingTop: 12
	},
	contactName: {
		fontWeight: 600,
		fontSize: 17,
		marginTop: 12
	},
	lastSeen: {
		color: '#888888',
		fontSize: 14,
		marginTop: 5
	},
	logo: {

	}
};

class ChatHeader extends Component {
	render() {
		return (
			<div style={styles.wrapper} className="z-depth-1 col-md-12">
				<Col md={2}>
					<img className="rounded-circle z-depth-2" src="https://robohash.org/TK9.png?set=set3&amp;size=84x84" alt="" />
				</Col>
				<Col md={10}>
					<Col style={styles.contactName}>
						Contact name
					</Col>
					<Col style={styles.lastSeen}>
						Last seen 1 hour ago
					</Col>
				</Col>
			</div>
		);
	}
}

export default ChatHeader;
