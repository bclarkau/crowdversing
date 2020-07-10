import { maleNames, femaleNames } from '../dictionaries/names';
 
/**
 * Generate players
 */
export function generatePlayers(amount=100) {
	let players = [];

	for(let i=0; i<amount; i++) {
		let isMale = Math.random() >= 0.5;

		players.push({
			name: isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)],
			intelligence: Math.random(), // float value between 0 and 1
			color: Math.floor(Math.random() * 12) + 1, // int value between 1 and 12
			icon: (isMale ? 'm' : 'f') + (Math.floor(Math.random() * 24) + 1) // int value between 1 and 24
		});
	}
	
	return players;
}
