import React, { useState } from "react";
import Title from "./screens/Title"
import Game from "./screens/Game"

const App = () => {
	const [playing, setPlaying] = useState(false);

	return playing ? <Game /> : <Title setPlaying={setPlaying} />
};

export default App;