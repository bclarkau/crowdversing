/**
 * Fetch trivia questions
 */
export async function getQuestions(amount=10) {
	console.info(`Fetching ${amount} questions`);

	return new Promise((resolve, reject) => {
		fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`, {
			crossDomain: true,
			method: 'GET',
			mode: 'cors'
		})
		.then(response => { 
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		})
		.then(data => resolve(data))
		.catch(error => {
			console.error(error);
			reject();
		});
	});
}
