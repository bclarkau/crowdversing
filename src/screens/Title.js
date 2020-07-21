import React from "react";
import { connect } from 'react-redux';

const Title = props => {
	return <div>
		<h1>CrowdVersing</h1>
		<button onClick={() => props.dispatch({ type: 'START_GAME' })}>Start game</button>
	</div>;
};

export default connect()(Title);