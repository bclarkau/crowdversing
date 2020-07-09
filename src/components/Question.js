import React from "react";

const Question = props => {
	// insert the correct answer at a random point in the answers array 
	let answers = [...props.data.incorrect_answers];
	let index = Math.floor((Math.random() * 3));
	answers.splice(index, 0, props.data.correct_answer);
	
	return <div>
		<h2>Question {props.number}:</h2>
		<p>Category: {props.data.category}</p>
		<p>{props.data.question}</p>
		<div>
			{answers.map((label, i) => <button key={i}>{label}</button>)}
		</div>
	</div>;
};

export default Question;