import React, { useEffect } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Question from "../components/Question";
import PlayerGrid from "../components/PlayerGrid";
import { setQuestions, setPlayers } from "../redux/actions";

const Stage = styled.div`
	display: grid;
	grid-template-columns: auto 50% auto;
`;

const _Game = ({ players, isLoading, setQuestions, setPlayers, error }) => {
	const numQuestions = 20
	const numPlayers = 8

	console.log('GAME')

	useEffect(() => {
		setQuestions(numQuestions)
		setPlayers(numPlayers)
	}, [])

	if(isLoading) return <div>loading</div>

	return <Stage>
		{/* <PlayerGrid count={28} /> */}
		<Question />
		<PlayerGrid players={players} />
	</Stage>
};

const mapStateToProps = state => ({
	players: state.players,
	isLoading: state.isLoading,
	error: state.error
})

const mapDispatchToProps = dispatch => ({
	setQuestions, 
	setPlayers
})

export const Game = connect(mapStateToProps, mapDispatchToProps)(_Game);