import React from "react";
import { connect } from 'react-redux';

const Lose = props => {
	return <div>
		<h1>YOU LOSE</h1>
		<button onClick={() => props.dispatch({ type: 'START_GAME' })}>Play again</button>
	</div>;
};

export default connect()(Lose);