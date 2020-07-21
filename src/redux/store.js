import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	status : 'playing',
	questions : [],
	currentQuestion : 0,
	revealAnswer : false,
	players : [],
	isLoading : true,
	error : ''
}

function reducer(state = initialState, action) {
	console.log('reducer', state, action);

	switch(action.type) {
		case 'START_GAME' : 
			return {
				...initialState // reset back to the initial state
			}
		case 'WIN_GAME' : 
			return {
				...state,
				status: 'won'
			}
		case 'LOSE_GAME' : 
			return {
				...state,
				status: 'lost'
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
		case 'ANSWER_CORRECT' : 
			return {
				...state,
				revealAnswer : true
			}
		case 'NEXT_QUESTION' : 
			return {
				...state,
				revealAnswer : false,
				currentQuestion: state.currentQuestion + 1
			}
		default:
			return state;
	}
}

export const store = createStore(reducer, applyMiddleware(thunk));