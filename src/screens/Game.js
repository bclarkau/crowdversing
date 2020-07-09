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

	return isLoading ? "loading" : <Question number={counter+1} data={questions[counter]} />;
};

export default Game;