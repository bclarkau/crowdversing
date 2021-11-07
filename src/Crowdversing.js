import React, { memo } from 'react'
import { useStoreState } from 'easy-peasy'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Title, Game, Lose, Win } from './screens'

const Crowdversing = () => {
	const status = useStoreState(state => state.status)

	console.log({ status })

	const Screen = memo(() => {
		console.log('rendering screen...', status)
		switch(status) {
			case 'playing' : 
			case 'answered' : 
				return <Game />
			case 'lost' : 
				return <Lose />
			case 'won' : 
				return <Win />
			default : 
				return <Title />
		}
	}, [status])

	return <ThemeProvider theme={theme}>
		<Screen />
	</ThemeProvider>
}

export default Crowdversing