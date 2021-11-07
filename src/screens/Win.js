import React from "react";
import { connect } from 'react-redux';

const _Win = ({ restart }) => {
	return <div>
		<h1>YOU WON! 🎉</h1>
		<button onClick={restart}>Play again</button>
	</div>
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
	restart: () => dispatch({ type: 'START_GAME' })
})

export const Win = connect(mapStateToProps, mapDispatchToProps)(_Win)