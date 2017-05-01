import faker from 'faker';
import _ from 'lodash';
import moment from 'moment';

// todo move constants to separate file types.js in the same directory
export const SHOW_CONTACT_SCROLLBAR = 'SHOW_CONTACT_SCROLLBAR';
export const HIDE_CONTACT_SCROLLBAR = 'HIDE_CONTACT_SCROLLBAR';
export const FETCH_CONTACT_LIST = 'FETCH_CONTACT_LIST';
export const FILTER_CONTACT_LIST = 'FILTER_CONTACT_LIST';

export function showContactScrollbar() {
	return {
		type: SHOW_CONTACT_SCROLLBAR
	}
}

export function hideContactScrollbar() {
	return {
		type: HIDE_CONTACT_SCROLLBAR
	}
}

export function filterContactList(query) {
	return {
		type: FILTER_CONTACT_LIST,
		payload: query
	}
}

export function fetchContactList() {
	let contacts = _.times(20, function(n) {
		return {
			id: n,
			name: faker.name.findName(),
			photo: faker.internet.avatar(),
			lastTime: moment().format("ddd, hA"),
			lastMessage: _.truncate(faker.lorem.sentence(), {'length': 25})
		};
	});

	return function(dispatch) {
		return dispatch({
			type: FETCH_CONTACT_LIST,
			payload: contacts
		})
	}
}