// credit to interview cake

function hasPalindromePermutation(theString) {
	const unpairedChar = new Set();

	for (let char of theString) {
		if (unpairedChar.has(char)) {
			unpairedChar.delete(char);
		} else unpairedChar.add(char);
	}
	return unpairedChar.size <= 1;
}
