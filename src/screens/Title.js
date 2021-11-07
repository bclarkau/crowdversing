import React from "react";
import { connect } from 'react-redux';

const _Title = ({ start }) => {
	return <div>
		<h1>CrowdVersing</h1>
		<button onClick={start}>Start game</button>
	</div>;
};

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	start: () => dispatch({ type: 'START_GAME' })
})

export const Title = connect(mapStateToProps, mapDispatchToProps)(_Title);