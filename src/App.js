import React, { useState } from "react";
import Title from "./screens/Title"
import Game from "./screens/Game"
import Lose from "./screens/Lose"
import Win from "./screens/Win"

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

	return screen;
};

export default App;