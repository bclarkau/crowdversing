import React from "react";
import styled from 'styled-components';
import Player from "./Player";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
`;

const PlayerGrid = props => {
	return <Grid>
		{props.players.map((player, i) => <Player key={i} player={player} />)}
	</Grid>;
};

export default PlayerGrid;