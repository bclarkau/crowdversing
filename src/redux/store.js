import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	status : 'playing',
	questions : [],
	players : [],
	isLoading : true,
	error : ''
}

function reducer(state = initialState, action) {
	console.log('reducer', state, action);

	switch(action.type) {
		case 'START_GAME' : 
			return {
				...state,
				status: 'playing'
			}
		case 'DATA_SUCCESS' : 
			return {
				...state,
				questions: action.questions,
				isLoading: false
			}
		case 'DATA_ERROR' : 
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state;
	}
}

export const store = createStore(reducer, applyMiddleware(thunk));