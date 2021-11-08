import { useStoreActions } from 'easy-peasy'
import React from 'react'

export const Win = () => {
	const restart = useStoreActions(actions => actions.reset)
	return <div>
		<h1>YOU WON! 🎉</h1>
		<button onClick={() => restart()}>Play again</button>
	</div>
}