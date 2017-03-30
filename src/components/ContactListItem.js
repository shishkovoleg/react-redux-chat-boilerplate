import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

let styles = {
	h4: {
		marginTop: 12,
		marginBottom: 5,
		fontWeight: 600,
		fontSize: 16
	},
	wrapper: {
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 12,
		paddingRight: 12,
		cursor: 'pointer',
		marginLeft: 0,
		marginRight: 0,
		borderRight: 0
	},
	lastTime: {
		marginTop: 12,
		color: '#888888',
		marginLeft: 14
	},
	media: {
		paddingLeft: 12,
		paddingRight: 12
	},
	logo: {
		marginTop: 6
	},
	text: {
		padding: 0
	}
};

class ContactListItem extends Component {
	render() {
		return (
			<Row className="list-group-item" style={styles.wrapper} key={this.props.id}>
				<div className="media-left" style={styles.media}>
					<img className="rounded-circle z-depth-2"
						 src={this.props.photo}
						 style={styles.logo}
						 alt="" />
				</div>
				<div className="media-body" style={styles.media}>
					<Col md={9} style={styles.text}>
						<h4 style={styles.h4}>{this.props.name}</h4>
						<span>{this.props.lastMessage}</span>
					</Col>
					<Col md={3}>
						<div style={styles.lastTime}>{this.props.lastTime}</div>
					</Col>
				</div>
			</Row>
		);
	}
}

export default ContactListItem;
