import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from 'easy-peasy'

import { store } from './state/store'
import Crowdversing from './Crowdversing'

// TODO: Add icon credit to footer when styled 
// Player icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Status Icons made by <a href="https://www.flaticon.com/free-icon/close_151882?term=cross&page=1&position=2" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
const App = () => <StoreProvider {...{store}}>
	<Crowdversing />
</StoreProvider>

// render 
ReactDOM.render(<App />, document.getElementById("app"))