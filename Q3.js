function isPrimeNumber(n) {
	for ( let divisor = 2; divisor < n; divisor++) {
		if ( n % divisor === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrimeNumber(953));