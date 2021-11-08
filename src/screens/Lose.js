import React from 'react'
import { useStoreActions } from 'easy-peasy'

export const Lose = () => {
	const restart = useStoreActions(actions => actions.reset)
	return <div>
		<h1>YOU LOSE</h1>
		<button onClick={() => restart()}>Play again</button>
	</div>
}