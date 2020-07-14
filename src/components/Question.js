import React from "react";

const Question = props => {
	console.log('correct answer', props.data.correct_answer);

	// insert the correct answer at a random point in the answers array 
	let answers = [...props.data.incorrect_answers];
	let correctIndex = Math.floor((Math.random() * 3));
	answers.splice(correctIndex, 0, props.data.correct_answer);

	return <div>
		<h2>Question {props.number}:</h2>
		<p>Category: {props.data.category}</p>
		<p>{props.data.question}</p>
		{!props.reveal && <div>
			{answers.map((label, i) => <button key={i} onClick={() => props.callback(i, correctIndex)}>{label}</button>)}
		</div>}
		{props.reveal && <div>
			{props.data.correct_answer} CORRECT!
			<button onClick={props.next}>Next question</button>
		</div>}
	</div>;
};

export default Question;