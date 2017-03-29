import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

let styles = {
	h4: {
		marginTop: 12,
		marginBottom: 5,
		fontWeight: 600,
		fontSize: 16
	},
	listGroupItem: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 12,
		paddingRight: 12,
	},
	lastTime: {
		marginTop: 12,
		color: '#888888'
	}
};

class ContactListItem extends Component {
	render() {
		return (
			<Row className="list-group-item" style={styles.listGroupItem}>
				<div className="media-left">
					<img className="rounded-circle z-depth-2" src="https://robohash.org/TK8.png?set=set3&amp;size=64x64" alt="" />
				</div>
				<div className="media-body">
					<Col md={10}>
						<h4 style={styles.h4}>Contact name</h4>
						<span>Part of last message...</span>
					</Col>
					<Col md={2}>
						<div style={styles.lastTime}>14:35</div>
					</Col>
				</div>
			</Row>
		);
	}
}

export default ContactListItem;
