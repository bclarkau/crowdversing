import { createStore, action, thunk, computed, thunkOn, actionOn } from 'easy-peasy'

import { fetchQuestions, fetchPlayers } from './actions'
import { answeredCorrectly, checkAnswer, timeToAnswer } from './helpers'

const NUM_QUESTIONS = 20
const NUM_PLAYERS = 8
const GAME_STATUS = ['new', 'playing', 'won', 'lost']

const initialState = {
	status: 'new',
	loading: true,
	error: '',
	questions: [],
	index: 0,
	players: [],
	revealAnswer: false
}

const model = {
	...initialState,

	reset: action((state, payload) => ({ ...initialState })),

	// global game state
	setStatus: action((state, payload) => { state.status = GAME_STATUS.includes(payload) ? payload : 'new' }),
	setLoading: action((state, payload) => { state.loading = payload }),
	setError: action((state, payload) => { state.error = payload }),

	startGame: thunk(async (actions, payload) => {
		actions.setStatus('playing')

		const questions = await fetchQuestions(NUM_QUESTIONS)

		if(Array.isArray(questions)) {
			actions.setQuestions(questions)
		} else {
			actions.setError('Could not fetch questions')
		}

		const players = fetchPlayers(NUM_PLAYERS)
		actions.setPlayers(players)

		actions.setLoading(false)
	}),

	endGame: thunk(async (actions, payload) => {
		actions.setStatus(payload)
	}),

	// question state
	question: computed(state => ({ number: state.index + 1, ...state.questions[state.index] })),
	setReveal: action((state, payload) => { state.revealAnswer = payload }),

	// question actions
	setQuestions: action((state, payload) => { state.questions = payload }),
	setIndex: action((state, payload) => { state.index = payload }),

	nextQuestion: thunk((actions, payload, { getState }) => {
		const state = getState()
		console.log('NEXT QUESTION THUNK', state, state.index)
		const next = state.index + 1

		if(next >= NUM_QUESTIONS) {
			actions.endGame('won')
		} else {
			actions.setReveal(false)
			actions.setIndex(next)
		}
	}),

	// player state
	activePlayers: computed(state => state.players.filter(player => player.active)),
	setPlayers: action((state, payload) => { state.players = payload }),
	setPlayerStatus: action((state, payload) => { state.players.find(player => player.id === payload.id).status = payload.status }),
	setPlayerState: action((state, payload) => { state.players.find(player => player.id === payload.id).active = payload.active }),
	
	setPlayersAnswering: thunk((actions, payload, { getState }) => {
		const state = getState()
		state.activePlayers.forEach(player => {
			actions.setPlayerStatus({ id: player.id, status: 'thinking' })
			setTimeout(() => actions.setPlayerStatus({ id: player.id, status: 'answered' }), timeToAnswer(player.intelligence))
		})
	}),
	
	setPlayersAnswered: thunk((actions, payload, { getState }) => {
		const state = getState()
		const currentQuestion = state.question.number
		state.activePlayers.forEach(player => {
			const correct = answeredCorrectly(currentQuestion, player.intelligence)
			if(correct) {
				actions.setPlayerStatus({ id: player.id, status: 'correct' })
			} else {
				actions.setPlayerStatus({ id: player.id, status: 'incorrect' })
				actions.setPlayerState({ id: player.id, active: false })
			}
		})
	}),

	startPlayers: thunkOn(
		(actions, storeActions) => [ 
			storeActions.startGame,
			storeActions.nextQuestion,
		],
		(actions, target) => {
			console.log('players start')
			actions.setPlayersAnswering()
		}
	),

	revealPlayers: thunkOn(
		(actions, storeActions) => [ 
			storeActions.setReveal,
		],
		(actions, target) => {
			actions.setPlayersAnswered()
		}
	),
}

export const store = createStore(model, initialState)

/* 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
	status : 'new',
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
		case 'RESTART_GAME' : 
			return {
				...initialState, // reset back to the initial state
			}
		case 'START_GAME' : 
			return {
				status: 'playing',
				isLoading: false
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
		console.log('DATA_SUCCESS', action)
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
				currentQuestion: state.currentQuestion + 1,
				players : [...state.players].map(player => {
					let updatedPlayer = {...player};

					if(!player.active) {
						return updatedPlayer
					}

					if(player.status === 'incorrect') {
						updatedPlayer.status = 'lost'
						updatedPlayer.active = false
						return updatedPlayer
					} 
						
					updatedPlayer.status = 'waiting'
					return updatedPlayer
				})
			}
		case 'SET_PLAYERS' : 
			// console.log('SET_PLAYERS', action.players)
			return {
				...state,
				players : action.players
			}
		case 'SET_PLAYER_DATA' : 
			// console.log('SET_PLAYER_DATA', action.payload);
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
*/