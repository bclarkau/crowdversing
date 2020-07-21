import React from "react";
import { connect } from 'react-redux';

const Win = props => {
	return <div>
		<h1>YOU WON! 🎉</h1>
		<button onClick={() => props.dispatch({ type: 'START_GAME' })}>Play again</button>
	</div>;
};

export default connect()(Win);