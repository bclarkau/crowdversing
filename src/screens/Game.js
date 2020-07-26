import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Question from "../components/Question";
import PlayerGrid from "../components/PlayerGrid";
import { setQuestions } from "../redux/actions";

const Stage = styled.div`
	display: grid;
	grid-template-columns: auto 50% auto;
`;

const Game = props => {
	let numQuestions = 20;

	useEffect(() => {
		props.setQuestions(numQuestions);
	}, []);

	function nextQuestion() {
		console.log('loading next question');
		props.setStatus('playing');
		setCounter(prevState => ++prevState);
	}

	return props.isLoading ? "loading" : <Stage>
		{/* <PlayerGrid players={32} counter={counter} question={props.questions[counter]} reveal={props.reveal} /> */}
		<Question />
		{/* <PlayerGrid players={32} counter={counter} question={props.questions[counter]} reveal={props.reveal} /> */}
	</Stage>
};

const mapStateToProps = state => ({
	isLoading: state.isLoading,
	error: state.error
});

export default connect(mapStateToProps, { setQuestions })(Game);