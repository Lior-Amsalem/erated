// import the "global" constants that used in action file and the reducer file (here)
import * as constants from './constants';

// api that helps to convert simple js object into immutable object
let fromJS = Immutable.fromJS;
let Map = Immutable.Map;

/**
 * - create immutable initial state
 * - it's epmty because we load data from action
 */
const initialState = Map({});

// We can add here 'combineReducers' and split this file into more smaller reducers file
export default function(state = initialState, action = '') {
	switch(action.type) {
		case constants.INITIAL_DATA:
			state = state.set('widget', fromJS(action.data));

			state = state.set('error', action.error);

			return state;
		case constants.CHANGE_SHOP:
			return state.set('current_shop', action.name);
		default:
			return state;
	}
}