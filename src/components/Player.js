import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { setPlayerStatus, setPlayerAsInactive } from "../redux/actions";
import styled from 'styled-components';
import Avatar from './Avatar';

const GridItem = styled.div`
	text-align: center; 
	font-size: 0.8rem;
`;

const Player = props => {
	// const [status, setStatus] = useState(props.status)
	// const [active] = useState(props.active)

	useEffect(() => {
		let timeToAnswer = 1000 + props.intelligence * 2000;
		props.setPlayerStatus(props.player, 'thinking');
		props.active && setTimeout(() => answerQuestion(), timeToAnswer);
		!props.active && setIcon('close');
	}, [props.questionIndex]);

	useEffect(() => {
		if(props.status === 'answered') {
			props.active ? props.setPlayerStatus(props.player, 'correct') : props.setPlayerStatus(props.player, 'incorrect');
		}
	}, [props.reveal]);

	useEffect(() => {
		console.log('player status updated -', props.status);
	}, [props.status]);

	function answerQuestion() {
		// increase chance by player intelligence (halved to prevent chance exceeding 1)
		let chanceCorrect = props.question * props.intelligence;
		if(Math.random() <= chanceCorrect) {
			props.setPlayerAsInactive(props.player);
		}
		props.setPlayerStatus(props.player, 'answered');
	}

	return <GridItem>
		<Avatar icon={props.icon} status={props.status} />
		{props.name}
		{props.status === 'waiting' && '---'}
		{props.status === 'thinking' && '...'}
		{props.status === 'answered' && '*'}
	</GridItem>
}


function mapStateToProps(state, ownProps) {
	const { players, questionIndex, reveal } = state
	let player = players.find(player => player.id === ownProps.id);

	return { 
		questionIndex, 
		reveal,
		player,
		...player
	}
}

export default connect(mapStateToProps, { setPlayerStatus, setPlayerAsInactive })(Player);
