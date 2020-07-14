import { maleNames, femaleNames } from '../dictionaries/names';
 
/**
 * Generate players
 */
export function generatePlayers(amount=8) {
	let players = [];

	for(let i=0; i<amount; i++) {
		let isMale = Math.random() >= 0.5;

		players.push({
			id: i,
			name: isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)],
			intelligence: Math.random(), // float value between 0 and 1
			color: Math.floor(Math.random() * 4) + 1, // int value between 1 and 10
			icon: (isMale ? 'm' : 'f') + (Math.floor(Math.random() * 23) + 1), // int value between 1 and 24,
			playing: true // flag to show if player is still in the game 
		});
	}
	
	return players;
}
 
/**
 * Generate a single player
 */
export function generatePlayer() {
	let isMale = Math.random() >= 0.5;

	return {
		name: isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)],
		intelligence: Math.random(), // float value between 0 and 1
		color: Math.floor(Math.random() * 4) + 1, // int value between 1 and 10
		icon: (isMale ? 'm' : 'f') + (Math.floor(Math.random() * 23) + 1), // int value between 1 and 24,
		playing: true // flag to show if player is still in the game 
	}
}
