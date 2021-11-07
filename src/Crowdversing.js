import React, { memo, useEffect } from "react";
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { Title, Game, Lose, Win } from "./screens"

// TODO: Add icon credit to footer when styled 
// Player icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Status Icons made by <a href="https://www.flaticon.com/free-icon/close_151882?term=cross&page=1&position=2" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
const Crowdversing = ({ status }) => {

	console.log({ status })

	useEffect(() => {
		console.log('updated', status)
	}, [status])

	const Screen = () => {
		console.log('rendering screen...', status)
		switch(status) {
			case 'playing' : 
			case 'answered' : 
				return <Game />
			case 'lost' : 
				return <Lose />
			case 'won' : 
				return <Win />
			default : 
				return <Title />
		}
	}

	return <ThemeProvider theme={theme}>
		<Screen />
	</ThemeProvider>
};

const mapStateToProps = state => ({
	status: state.status
});

export default connect(mapStateToProps)(Crowdversing);