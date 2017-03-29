import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

let styles = {
	contactName: {
		marginTop: 10,
		color: '#0091ea',
		fontWeight: 600,
		fontSize: 14,
		marginLeft: 15
	},
	time: {
		marginLeft: 15,
		color: '#777777'
	},
	text: {
		marginLeft: 15
	}
};

class Message extends Component {
	render() {
		return (
			<Col md={12}>
				<Col md={1}>
					<img className="rounded-circle z-depth-2" src="https://robohash.org/TK9.png?set=set3&amp;size=64x64" alt="" />
				</Col>
				<Col md={11}>
					<Col style={styles.contactName}>
						<a href="">Contact name</a>
					</Col>
					<Col style={styles.time}>
						14:35
					</Col>
					<Col style={styles.text}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum dolor id orci ultrices, eget ornare lorem viverra. Pellentesque porta nunc eget feugiat hendrerit.
						</p>
						<p>
							Aliquam a est commodo, vulputate elit et, maximus nibh. Donec maximus mi eu dui placerat, a ornare risus rhoncus. Nulla malesuada aliquet nisi vitae consectetur. Curabitur aliquam quam at leo efficitur, sit amet aliquam magna feugiat. Pellentesque eget viverra arcu.
						</p>
					</Col>
				</Col>
			</Col>
		);
	}
}

export default Message;
