import React from "react";
import styled from 'styled-components';
import Player from "./Player";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const PlayerGrid = props => {
	// const roll = Math.random() * (0.9 - 0.1) + 0.1; // get a random number to seed player answers
	console.log('grid load', props.question);

	// calculate and set the players' answers
	let questionDifficulty = 0; // everyone starts with 0% chance of getting correct

	// increase chance by question difficulty (max 1.0)
	switch(props.question.difficulty) {
		case 'easy' : 
			questionDifficulty += 1; 
			break;
		case 'medium' : 
			questionDifficulty += 0.90; 
			break;
		case 'hard' : 
			questionDifficulty += 0.80; 
			break;
		default : 
			questionDifficulty += 0.70;
	}
		
	return <Grid>
		{[...Array(props.players)].map((player, i) => <Player key={i} seed={Math.random()} counter={props.counter} question={questionDifficulty} reveal={props.reveal} />)}
	</Grid>
};

export default PlayerGrid;