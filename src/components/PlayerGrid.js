import React from "react";
import styled from 'styled-components';
import Player from "./Player";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 20% 20% 20% 20% 20%;
`;

const GridItem = styled.div`
	text-align: center; 
	// background: ${props => props.theme.playerColor[props.color]};
	border-radius: 10%;
`;

const PlayerGrid = props => {
	return <Grid>
		{props.players.map((player, i) => <Player key={i} player={player} />)}
	</Grid>;
};

export default PlayerGrid;