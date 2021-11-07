import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import playerIcon from '../../assets';

const IconWrapper = styled.div`
	text-align: center; 
	margin-top: 10px;

	svg {
		fill: ${props => props.theme.player.unanswered};
		fill: ${props => props.status === 'answered' && props.theme.player.answered};
		fill: ${props => props.status === 'correct' && props.theme.player.correct};
		fill: ${props => props.status === 'incorrect' && props.theme.player.incorrect};
		fill: ${props => props.status === 'lost' && props.theme.player.lost};
		width: 80%;
		height: auto;
	}
`

const Avatar = ({ active, status, icon }) => {
	// const [icon, setIcon] = useState(props.icon)
	// const [icon, setIcon] = useState(props.icon)
	const Icon = active ? playerIcon[icon] : playerIcon['close']

	// useEffect(() => {
	// 	props.status === 'lost' && setIcon('close')
	// }, [props.status])
	
	return <IconWrapper {...{status}}>
		<Icon />
	</IconWrapper>
}

export default Avatar