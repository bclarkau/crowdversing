import React from "react";
import styled from 'styled-components';
import playerIcon from '../../assets/players';

const IconWrapper = styled.div`
	text-align: center; 
	margin-top: 10px;

	svg {
		fill: ${props => props.theme.playerColor[props.color]};
		width: 80%;
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