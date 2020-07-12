import React from "react";
import styled from 'styled-components';
import Avatar from './Avatar';

const GridItem = styled.div`
	text-align: center; 
	font-size: 0.8rem;
`;

const Player = props => <GridItem color={props.player.color}>
	<Avatar icon={props.player.icon} color={props.player.color} />
	{props.player.name}
</GridItem>

export default Player;