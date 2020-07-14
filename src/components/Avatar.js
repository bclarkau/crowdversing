import React from "react";
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
`;

const Avatar = props => {
	const Icon = playerIcon[props.icon];
	
	return <IconWrapper status={props.status}>
		<Icon />
	</IconWrapper>
}

export default Avatar;