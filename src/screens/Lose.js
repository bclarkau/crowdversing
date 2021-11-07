import React from "react";
import { connect } from 'react-redux';

const _Lose = ({ restart }) => {
	return <div>
		<h1>YOU LOSE</h1>
		<button onClick={restart}>Play again</button>
	</div>;
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	restart: () => dispatch({ type: 'START_GAME' })
})

export const Lose = connect(mapStateToProps, mapDispatchToProps)(_Lose)