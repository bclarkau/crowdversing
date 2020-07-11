import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import Title from "./screens/Title"
import Game from "./screens/Game"
import Lose from "./screens/Lose"
import Win from "./screens/Win"

// TODO: Add icon credit to footer when styled 
// Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const App = () => {
	const [status, setStatus] = useState('');
	let screen;

	switch(status) {
		case 'playing' : 
			screen = <Game setStatus={setStatus} />
			break;
		case 'lost' : 
			screen = <Lose setStatus={setStatus} />
			break;
		case 'won' : 
			screen = <Win setStatus={setStatus} />
			break;
		default : 
			screen = <Title setStatus={setStatus} />
	}

	return <ThemeProvider theme={theme}>
		{screen}
	</ThemeProvider>;
};

export default App;