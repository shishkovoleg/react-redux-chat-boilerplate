import React  from 'react';
import {Col, FormControl} from 'react-bootstrap';

let styles = {
	wrapper: {
		backgroundColor: '#ffffff',
		height: 89,
		padding: 10,
		marginTop: 10,
		borderTop: '1px solid #dddddd',
		borderLeft: '1px solid #dddddd',
	},
	input: {
		height: 40,
		marginTop: 15,
		border: 0,
		boxShadow: 'none'
	},
	icon: {
		fontSize: '2em',
		color: '#2BBBAD',
		marginTop: 18
	}
};

const ContactListFilter = ({filterContactList}) => {
	return (
		<Col md={12} style={styles.wrapper}>
			<Col md={1}>
				<i className="fa fa-search" style={styles.icon} />
			</Col>
			<Col md={10}>
				<FormControl
					style={styles.input}
					placeholder="Search"
					onChange={e => filterContactList(e.target.value)}/>
			</Col>
		</Col>
	);
};

ContactListFilter.propTypes = {
	filterContactList: React.PropTypes.func
};

export default ContactListFilter;
