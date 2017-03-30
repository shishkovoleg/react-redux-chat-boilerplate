import {FETCH_CONTACT_LIST, SHOW_CONTACT_SCROLLBAR, HIDE_CONTACT_SCROLLBAR} from '../actions';

const initialState =  {
	contactList: [],
	showScrollbar: false
};

export default function contactListReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_CONTACT_LIST:
			return {
				...state,
				contactList: action.payload
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

		default:
			return state;
	}
}