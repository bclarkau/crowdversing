import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import { Player } from './Player'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const PlayerGrid = ({ players }) => {
	// const roll = Math.random() * (0.9 - 0.1) + 0.1; // get a random number to seed player answers

	// useEffect(() => {
	// 	// props.playersAnswerQuestion()
	// }, [])

	// // calculate and set the players' answers
	// let questionDifficulty = 0 // everyone starts with 0% chance of getting correct

	// // increase chance by question difficulty (max 1.0)
	// switch(question.difficulty) {
	// 	case 'easy' : 
	// 		questionDifficulty += 1; 
	// 		break;
	// 	case 'medium' : 
	// 		questionDifficulty += 0.90; 
	// 		break;
	// 	case 'hard' : 
	// 		questionDifficulty += 0.80; 
	// 		break;
	// 	default : 
	// 		questionDifficulty += 0.70;
	// }
		
	return <Grid>
		{players.map(player => <Player key={player.id} id={player.id} question={1} {...player} />)}
	</Grid>
}