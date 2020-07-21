export function setQuestions(amount) {
	console.info(`Fetching ${amount} questions`);

	// temp question data
	let tempQuestions = {"response_code":0,"results":[{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ","correct_answer":"Richard Branson","incorrect_answers":["Alan Sugar","Donald Trump","Bill Gates"]},{"category":"Vehicles","type":"multiple","difficulty":"medium","question":"What part of an automobile engine uses lobes to open and close intake and exhaust valves, and allows an air\/fuel mixture into the engine?","correct_answer":"Camshaft","incorrect_answers":["Piston","Drive shaft","Crankshaft"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"How many planets are in our Solar System?","correct_answer":"Eight","incorrect_answers":["Nine","Seven","Ten"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"How many degrees Fahrenheit is 100 degrees Celsius? ","correct_answer":"212","incorrect_answers":["326","100","451"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"When was Steam first released?","correct_answer":"2003","incorrect_answers":["2004","2011","2007"]},{"category":"Entertainment: Musicals & Theatres","type":"multiple","difficulty":"medium","question":"In which Shakespearean play will you find the suicide of Ophelia?","correct_answer":"Hamlet","incorrect_answers":["Macbeth","Othello","King Lear"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"In the 9th Pokemon movie, who is the Prince of the Sea?","correct_answer":"Manaphy","incorrect_answers":["Ash","May","Phantom"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The human heart has how many chambers?","correct_answer":"4","incorrect_answers":["2","6","3"]},{"category":"Animals","type":"multiple","difficulty":"hard","question":"Which of these animals is NOT a lizard?","correct_answer":"Tuatara","incorrect_answers":["Komodo Dragon","Gila Monster","Green Iguana"]},{"category":"History","type":"multiple","difficulty":"hard","question":"During the Spanish Civil War (1936), Francisco Franco fought for which political faction?","correct_answer":"Nationalist Spain","incorrect_answers":["Republican Spain","Popular Front","Papal State"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"What year was Red Hot Chill Pepper&#039;s album &quot;Californication&quot; released?","correct_answer":"1999","incorrect_answers":["1997","2000","1992"]},{"category":"Mythology","type":"multiple","difficulty":"medium","question":"What is the name of the Greek god of blacksmiths?","correct_answer":"Hephaestus","incorrect_answers":["Dyntos","Vulcan","Artagatus"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"How many trophies are there in &quot;Super Smash Bros. for Nintendo 3DS&quot;?","correct_answer":"685","incorrect_answers":["1360","716","1155"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"According to Overwatch&#039;s lore, who was once a member of the Deadlock Gang?","correct_answer":"McCree","incorrect_answers":["Roadhog","Soldier 76","Junkrat"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"Who invented Pastafarianism?","correct_answer":"Bobby Henderson","incorrect_answers":["Eric Tignor","Bill Nye","Zach Soldi"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Which was the first &quot;Call Of Duty: Zombies&quot; map to introduce the &quot;Wunderwaffe DG-2&quot;?","correct_answer":"Shi No Numa","incorrect_answers":["Tranzit","Kino Der Toten","Der Riese"]},{"category":"History","type":"multiple","difficulty":"hard","question":"What was the name of the German offensive operation in October 1941 to take Moscow before winter?","correct_answer":"Operation Typhoon","incorrect_answers":["Operation Sunflower","Operation Barbarossa","Case Blue"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Which one of these games came out first?","correct_answer":"Terraria","incorrect_answers":["Minecraft","Starbound","Factorio"]},{"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"medium","question":"What was the number on Gerald&#039;s shirt in &quot;Hey Arnold!&quot;?","correct_answer":"33","incorrect_answers":["88","38","83"]},{"category":"History","type":"multiple","difficulty":"hard","question":"Which English king was married to Eleanor of Aquitaine?","correct_answer":"Henry II","incorrect_answers":["Richard I","Henry I","Henry V"]}]};

	return dispatch => {
		dispatch({
			type: 'DATA_SUCCESS',
			questions: tempQuestions.results
		});
	}

	return dispatch => {
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
		.then(data => dispatch({
			type: 'DATA_SUCCESS',
			questions: data.results
		}))
		.catch(error => dispatch({
			type: 'DATA_ERROR',
			error: error
		}));
	}
}