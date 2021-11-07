import React from 'react'
import { useStoreActions } from 'easy-peasy'

export const Title = () => {
	const start = useStoreActions(actions => actions.startGame)

	return <div>
		<h1>CrowdVersing</h1>
		<button onClick={() => start()}>Start game</button>
	</div>
}