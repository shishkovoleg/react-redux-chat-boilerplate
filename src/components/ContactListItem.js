import React  from 'react';
import {Col, Row} from 'react-bootstrap';

let styles = {
	h4: {
		marginTop: 12,
		marginBottom: 5,
		fontWeight: 600,
		fontSize: 16
	},
	wrapper: {
		paddingTop: 2,
		paddingBottom: 8,
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
		marginLeft: 30,
		fontSize: 12
	},
	media: {
		paddingLeft: 12
	},
	photo: {
		marginTop: 6,
		width: 56,
		height: 56
	},
	text: {
		padding: 0
	},
	lastTimeWrapper: {
		padding: 0
	}
};

const ContactListItem = ({id, name, lastTime, lastMessage, photo}) => {
	return (
		<Row className="list-group-item" style={styles.wrapper} key={id}>
			<div className="media-left" style={styles.media}>
				<img className="img-circle"
					 src={photo}
					 style={styles.photo}
					 alt="" />
			</div>
			<div className="media-body" style={styles.media}>
				<Col md={8} style={styles.text}>
					<h4 style={styles.h4}>{name}</h4>
					<span>{lastMessage}</span>
				</Col>
				<Col md={4} style={styles.lastTimeWrapper}>
					<div style={styles.lastTime}>{lastTime}</div>
				</Col>
			</div>
		</Row>
	);
};

ContactListItem.propTypes = {
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	photo: React.PropTypes.string.isRequired,
	lastTime: React.PropTypes.string,
	lastMessage: React.PropTypes.string,
};

export default ContactListItem;
