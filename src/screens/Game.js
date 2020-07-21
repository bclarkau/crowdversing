import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Question from "../components/Question";
import PlayerGrid from "../components/PlayerGrid";
import { setQuestions } from "../redux/actions";
import { generatePlayers } from "../services/game";

const Stage = styled.div`
	display: grid;
	grid-template-columns: auto 50% auto;
`;

const Game = props => {
	const [counter, setCounter] = useState(0);
	const [revealAnswer, setRevealAnswer] = useState(false);
	let numQuestions = 20;

	useEffect(() => {
		props.setQuestions(numQuestions);
	}, []);

	/**
	 * Check if selected answer is correct. If yes, go to next question. If no, go to lose screen.
	 * @param {*} selectedIndex 
	 * @param {*} correctIndex 
	 */
	function handleAnswer(selectedIndex, correctIndex) {
		let isCorrect = selectedIndex === correctIndex;
		let lastQuestion = counter+1 === numQuestions;

		if(isCorrect && lastQuestion) {
			console.log('WE HAVE A WINNER');
			props.setStatus('won');
		} else if(isCorrect) {
			console.log('CORRECT');
			props.setStatus('answered');
		} else {
			console.log('WRONG');
			props.setStatus('lost');
		}
	}

	function nextQuestion() {
		console.log('loading next question');
		props.setStatus('playing');
		setCounter(prevState => ++prevState);
	}

	return props.isLoading ? "loading" : <Stage>
		{/* <PlayerGrid players={32} counter={counter} question={props.questions[counter]} reveal={props.reveal} /> */}
		<Question number={counter+1} data={props.questions[counter]} callback={handleAnswer} next={nextQuestion} reveal={props.reveal} />
		{/* <PlayerGrid players={32} counter={counter} question={props.questions[counter]} reveal={props.reveal} /> */}
	</Stage>
};

const mapStateToProps = state => ({
	questions: state.questions,
	isLoading: state.isLoading,
	error: state.error
});

export default connect(mapStateToProps, { setQuestions })(Game);