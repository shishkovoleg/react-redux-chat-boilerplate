import _ from 'lodash';

import {
	FETCH_CONTACT_LIST,
	SHOW_CONTACT_SCROLLBAR,
	HIDE_CONTACT_SCROLLBAR,
	FILTER_CONTACT_LIST
} from '../actions';

const initialState =  {
	contacts: [],
	contactsFiltered: [],
	showScrollbar: false,
};

export default function contactListReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_CONTACT_LIST:
			return {
				...state,
				contacts: action.payload,
				contactsFiltered: action.payload
			};

		case SHOW_CONTACT_SCROLLBAR:
			return {
				...state,
				showScrollbar: true
			};

		case HIDE_CONTACT_SCROLLBAR:
			return {
				...state,
				showScrollbar: false
			};

		case FILTER_CONTACT_LIST:
			return {
				...state,
				contactsFiltered: _.filter(
					state.contacts, function(c) {
						return _.startsWith(c.name, action.payload);
					})
			};

		default:
			return state;
	}
}