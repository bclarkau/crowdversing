import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'

import { Question } from '../components/Question'
import { PlayerGrid } from '../components/PlayerGrid'

const Stage = styled.div`
	display: grid;
	grid-template-columns: auto 50% auto;
`;

export const Game = () => {
	const questions = useStoreState(state => state.questions)
	const players = useStoreState(state => state.players)
	const loading = useStoreState(state => state.loading)

	console.log({ players })

	if(loading) return <div>loading</div>

	return <Stage>
		{/* <PlayerGrid count={28} /> */}
		{/* <Question /> */}
		<PlayerGrid {...{players}} />
	</Stage>
}