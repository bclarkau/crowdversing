import React from 'react'

import { answerQuestion, nextQuestion } from '../state/actions'

export const Question = () => {
	console.log('correct answer', data.correct_answer)

	// insert the correct answer at a random point in the answers array 
	let answers = [...data.incorrect_answers];
	let correctIndex = Math.floor((Math.random() * 3))
	answers.splice(correctIndex, 0, data.correct_answer)

	return <div>
		<h2>Question {number}:</h2>
		<p>Category: {data.category}</p>
		<p>{data.question}</p>
		{!reveal && <div>
			{answers.map((label, i) => <button key={i} onClick={() => answerQuestion(i, correctIndex)}>{label}</button>)}
		</div>}
		{reveal && <div>
			{data.correct_answer} CORRECT!
			<button onClick={nextQuestion}>Next question</button>
		</div>}
	</div>
}