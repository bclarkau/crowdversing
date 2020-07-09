import React from "react";

const Title = props => {
	return <div>
		<h1>CrowdVersing</h1>
		<button onClick={() => props.setPlaying(true)}>Start game</button>
	</div>;
};

export default Title;