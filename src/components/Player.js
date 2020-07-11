import React from "react";
import styled from 'styled-components';
import Avatar from './Avatar';

const GridItem = styled.div`
	text-align: center; 
	// background: ${props => props.theme.playerColor[props.color]};
	border-radius: 10%;
`;

const Player = props => <GridItem color={props.player.color}>
	<Avatar icon={props.player.icon} color={props.player.color} />
	{props.player.name}
</GridItem>

export default Player;