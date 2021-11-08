import React, { useCallback, useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

export const Question = () => {
	const [reveal, setReveal] = useState(false)
	const { number, category, question, correct_answer, incorrect_answers } = useStoreState(state => state.question)
	const endGame = useStoreActions(actions => actions.endGame)
	const goToNext = useStoreActions(actions => actions.nextQuestion)
	
console.log({ number, category, question, correct_answer, incorrect_answers })

	useEffect(() => {
		setReveal(false)
	}, [question])

	console.log('correct answer', correct_answer)

	// insert the correct answer at a random point in the answers array 
	const answers = [...incorrect_answers]
	const correctIndex = Math.floor((Math.random() * 3))
	answers.splice(correctIndex, 0, correct_answer)

	const handleClick = useCallback(answer => {
		if(answer === correctIndex) {
			setReveal(true)
		} else {
			endGame('lost')
		}
	}, [correctIndex])

	return <div>
		<h2>Question {number}:</h2>
		<p>Category: {category}</p>
		<p>{question}</p>
		{!reveal && <div>
			{answers.map((label, i) => <button key={i} onClick={() => handleClick(i)}>{label}</button>)}
		</div>}
		{reveal && <div>
			{correct_answer} CORRECT!
			<button onClick={() => goToNext()}>Next question</button>
		</div>}
	</div>
}