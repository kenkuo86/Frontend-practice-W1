function upperCase(word) {
	let firstchar = word.charAt(0);
	let rest = word.slice(1);
	let re = /^[a-z]+$/;
	if (re.test(firstchar)) {
		firstchar = firstchar.toUpperCase();
		return firstchar + rest;
	} else {
		return word;
	}
}

console.log(upperCase("ken"));