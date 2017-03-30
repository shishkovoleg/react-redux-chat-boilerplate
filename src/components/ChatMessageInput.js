import React, { Component } from 'react';
import {Col, FormControl} from 'react-bootstrap';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		paddingTop: 15,
		paddingBottom: 15,
		borderTop: '1px solid #dddddd'
	},
	input: {
		width: '90%',
		marginLeft: 30,
		height: 45
	}
};

class ChatMessageInput extends Component {
	render() {
		return (
			<Col md={12} style={styles.wrapper}>
				<FormControl style={styles.input}/>
			</Col>
		);
	}
}

export default ChatMessageInput;
