import React from "react";
import styled from 'styled-components';
import playerIcon from '../../assets/players';

const IconWrapper = styled.div`
	text-align: center; 
	margin-top: 10px;

	svg {
		fill: ${props => props.active ? props.theme.playerColor[props.fill] : props.theme.playerLost};
		width: 80%;
		height: auto;
	}
`;

const Avatar = props => {
	const Icon = playerIcon[props.icon];

	return <IconWrapper fill={props.color} active={props.active}>
		<Icon />
	</IconWrapper>
}

export default Avatar;