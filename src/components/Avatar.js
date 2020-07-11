import React from "react";
import styled from 'styled-components';
import playerIcon from '../../assets/players';

const IconWrapper = styled.div`
	text-align: center; 
	// background: ${props => props.theme.playerColor[props.color]};
	border-radius: 10%;

	svg {
		fill: ${props => props.theme.playerColor[props.color]};
		width: auto;
		height: auto;
	}
`;

const Avatar = props => {
	const Icon = playerIcon[props.icon];

	return <IconWrapper color={props.color}>
		<Icon />
	</IconWrapper>
}

export default Avatar;