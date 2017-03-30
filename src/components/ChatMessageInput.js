import React, { Component } from 'react';
import {Col, FormControl} from 'react-bootstrap';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		paddingTop: 15,
		paddingBottom: 15,
		borderLeft: '1px solid #dddddd',
		borderRight: '1px solid #dddddd',
		borderBottom: '1px solid #dddddd',
	},
	input: {
		width: '90%',
		marginLeft: 30,
		height: 45,
		borderRadius: 0
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
