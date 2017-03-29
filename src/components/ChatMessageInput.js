import React, { Component } from 'react';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff'
	}
};

class ChatMessageInput extends Component {
	render() {
		return (
			<div className="col-md-12" style={styles.wrapper}>
				Chat message input
			</div>
		);
	}
}

export default ChatMessageInput;
