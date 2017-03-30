import { combineReducers } from 'redux';

import ContactListReducer from './contactList';

const rootReducer = combineReducers({
	contactList: ContactListReducer
});

export default rootReducer;