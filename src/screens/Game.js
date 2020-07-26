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

const Game = props => {
	let numQuestions = 20;
	let numPlayers = 8;

	useEffect(() => {
		props.setQuestions(numQuestions);
		props.setPlayers(numPlayers);
	}, []);

	return props.isLoading ? "loading" : <Stage>
		{/* <PlayerGrid count={28} /> */}
		<Question />
		<PlayerGrid players={props.players} />
	</Stage>
};

const mapStateToProps = state => ({
	players: state.players,
	isLoading: state.isLoading,
	error: state.error
});

export default connect(mapStateToProps, { setQuestions, setPlayers })(Game);