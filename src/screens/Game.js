import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { getQuestions } from "../services/api";

const Game = props => {
	const [questions, setQuestions] = useState([]);
	const [counter, setCounter] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		getQuestions()
		.then(data => {
			switch(data.response_code) {
				// if response_code is 0 (success), set questions
				case 0 : 
					setQuestions(data.results);
					break;
				// otherwise throw an error
				default :
					throw new Error("An error occurred while selecting questions");
			}
		})
		.catch(error => setError(error))
		.finally(() => setIsLoading(false))
	}, []);

	/**
	 * Check if selected answer is correct. If yes, go to next question. If no, go to lose screen.
	 * @param {*} selectedIndex 
	 * @param {*} correctIndex 
	 */
	function handleAnswer(selectedIndex, correctIndex) {
		if(selectedIndex === correctIndex) {
			console.log('CORRECT');
			setCounter(counter+1);
		} else {
			console.log('WRONG');
			props.setStatus('lost');
		}
	}

	return isLoading ? "loading" : <Question number={counter+1} data={questions[counter]} callback={handleAnswer} />;
};

export default Game;