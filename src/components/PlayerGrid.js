import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { setPlayers } from "../redux/actions";
import styled from 'styled-components';
import Player from "./Player";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const PlayerGrid = props => {
	// const roll = Math.random() * (0.9 - 0.1) + 0.1; // get a random number to seed player answers

	useEffect(() => {
		// props.playersAnswerQuestion()
	}, [])

	// calculate and set the players' answers
	let questionDifficulty = 0 // everyone starts with 0% chance of getting correct

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
		{props.players.map((player, i) => <Player key={i} id={player.id} question={questionDifficulty} />)}
	</Grid>
}


const mapStateToProps = state => ({
	question: state.questions[state.currentQuestion],
	questionIndex: state.currentQuestion,
	reveal : state.revealAnswer
})

export default connect(mapStateToProps, { setPlayers })(PlayerGrid)