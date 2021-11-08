import React, { useEffect } from 'react'
import styled from 'styled-components'

import { setPlayerStatus } from '../state/actions'
import Avatar from './Avatar'

const GridItem = styled.div`
	text-align: center; 
	font-size: 0.8rem;
`

export const Player = ({ id, name, intelligence, status, question, icon, active }) => {
	// const [status, setStatus] = useState(props.status)
	// const [active] = useState(props.active)

	// useEffect(() => {
	// 	if(active) {
	// 		const timeToAnswer = 1000 + intelligence * 2000;
	// 		setPlayerStatus(id, 'thinking');
	// 		setTimeout(() => setPlayerStatus(id, 'answered'), timeToAnswer);
	// 	}
	// }, [question])

	// useEffect(() => {
	// 	if(status === 'answered') {
	// 		checkAnswer()
	// 	}
	// }, [reveal])

	function checkAnswer() {
		// increase chance by player intelligence (halved to prevent chance exceeding 1)
		const chanceCorrect = question * intelligence
		const newStatus = Math.random() >= chanceCorrect ? 'correct' : 'incorrect'
		setPlayerStatus(id, newStatus)
	}

	return <GridItem>
		<Avatar {...{ status, icon, active }} />
		{name}
		{status === 'waiting' && '---'}
		{status === 'thinking' && '...'}
		{status === 'answered' && '*'}
	</GridItem>
}