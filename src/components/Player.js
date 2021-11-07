import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { setPlayerStatus } from "../redux/actions";
import styled from 'styled-components';
import Avatar from './Avatar';

const GridItem = styled.div`
	text-align: center; 
	font-size: 0.8rem;
`

const Player = ({ active, questionIndex, reveal, player, setPlayerStatus }) => {
	// const [status, setStatus] = useState(props.status)
	// const [active] = useState(props.active)

	useEffect(() => {
		if(active) {
			let timeToAnswer = 1000 + props.intelligence * 2000;
			setPlayerStatus(props.player, 'thinking');
			setTimeout(() => setPlayerStatus(props.player, 'answered'), timeToAnswer);
		}
	}, [questionIndex])

	useEffect(() => {
		if(player.status === 'answered') {
			checkAnswer()
		}
	}, [reveal])

	function checkAnswer() {
		// increase chance by player intelligence (halved to prevent chance exceeding 1)
		let chanceCorrect = player.question * player.intelligence
		let status = Math.random() >= chanceCorrect ? 'correct' : 'incorrect'
		setPlayerStatus(player, status)
	}

	return <GridItem>
		<Avatar {...player} />
		{props.name}
		{props.status === 'waiting' && '---'}
		{props.status === 'thinking' && '...'}
		{props.status === 'answered' && '*'}
	</GridItem>
}


const mapStateToProps = ({ players, currentQuestion, revealAnswer }, ownProps) => ({
	questionIndex : currentQuestion, 
	reveal : revealAnswer,
	player : players.find(player => player.id === ownProps.id)
})

const mapDispatchToProps = dispatch => ({
	setPlayerStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);
