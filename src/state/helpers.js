
export const timeToAnswer = (intelligence, difficulty) => (1000 + intelligence * 2000)

export const answeredCorrectly = (question, intelligence) => {
	// increase chance by player intelligence (halved to prevent chance exceeding 1)
	const chanceCorrect = question * intelligence
	return Math.random() >= chanceCorrect
}