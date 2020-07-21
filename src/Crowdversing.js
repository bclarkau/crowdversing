import React from "react";
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import Title from "./screens/Title"
import Game from "./screens/Game"
import Lose from "./screens/Lose"
import Win from "./screens/Win"

// TODO: Add icon credit to footer when styled 
// Player icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Status Icons made by <a href="https://www.flaticon.com/free-icon/close_151882?term=cross&page=1&position=2" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
const Crowdversing = props => {
	let screen;

	switch(props.status) {
		case 'playing' : 
		case 'answered' : 
			screen = <Game />
			break;
		case 'lost' : 
			screen = <Lose />
			break;
		case 'won' : 
			screen = <Win />
			break;
		default : 
			screen = <Title />
	}

	return <ThemeProvider theme={theme}>
		{screen}
	</ThemeProvider>
};

const mapStateToProps = state => ({
	status: state.status
});

export default connect(mapStateToProps)(Crowdversing);