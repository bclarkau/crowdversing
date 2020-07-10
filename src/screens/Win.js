import React from "react";

const Win = props => {
	return <div>
		<h1>YOU WON! 🎉</h1>
		<button onClick={() => props.setStatus('playing')}>Play again</button>
	</div>;
};

export default Win;