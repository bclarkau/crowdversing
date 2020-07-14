import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Avatar from './Avatar';
import { maleNames, femaleNames } from '../dictionaries/names';

const GridItem = styled.div`
	text-align: center; 
	font-size: 0.8rem;
`;

const Player = props => {
	const [status, setStatus] = useState('waiting');
	const [playing, setPlaying] = useState(true);

	// set static player details 
	const [isMale] = useState(props.seed >= 0.5);
	const [name] = useState(isMale ? maleNames[Math.floor(props.seed * maleNames.length)] : femaleNames[Math.floor(props.seed * femaleNames.length)]);
	const [intelligence] = useState(props.seed);
	const [color] = useState(Math.floor(props.seed * 4) + 1);
	const [icon, setIcon] = useState((isMale ? 'm' : 'f') + (Math.floor(props.seed * 23) + 1));

	useEffect(() => {
		let timeToAnswer = 1000 + intelligence * 2000;
		setStatus('thinking');
		playing && setTimeout(() => answerQuestion(), timeToAnswer);
		!playing && setIcon('close');
	}, [props.counter]);

	useEffect(() => {
		if(status === 'answered') {
			playing ? setStatus('correct') : setStatus('incorrect');
		}
	}, [props.reveal]);

	function answerQuestion() {
		// increase chance by player intelligence (halved to prevent chance exceeding 1)
		let chanceCorrect = props.question * intelligence;
		setPlaying(Math.random() <= chanceCorrect);
		setStatus('answered');
	}

	return <GridItem>
		<Avatar icon={icon} status={status} />
		{name}
		{status === 'thinking' && '...'}
		{status === 'answered' && '*'}
	</GridItem>
}

export default Player;