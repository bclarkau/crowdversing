import React from "react";

const Lose = props => {
	return <div>
		<h1>YOU LOSE</h1>
		<button onClick={() => props.setStatus('playing')}>Play again</button>
	</div>;
};

export default Lose;