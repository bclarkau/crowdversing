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

function reducer(state, action) {
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
		case 'SET_PLAYERS' : 
			console.log('SET_PLAYERS', action.players)
			return {
				...state,
				players : action.players
			}
		case 'SET_PLAYER_DATA' : 
			console.log('SET_PLAYER_DATA', action.payload);
			return {
				...state,
				players : [...state.players].map(player => (player.id === action.payload.id ? action.payload.updatedPlayer : player))
			}
		default:
			console.log('DEFAULT')

			return state;
	}
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk));