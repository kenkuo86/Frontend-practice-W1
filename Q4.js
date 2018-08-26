// Palimdromic 就是迴文的意思
function isPalimdromic(word) {
	let n = word.length;

	// 字長是偶數
	if ( n % 2 === 0) {
		let former = word.substring( 0 , n / 2 );
		let latter = word.substring( n / 2 );
		latter = latter.split("").reverse().join('');
		if (former === latter) {
			return true;
		} 
	} else {
		let former = word.substring( 0 , ( n - 1 ) / 2 );
		let latter = word.substring( ( (n - 1) / 2 )  + 1 );
		latter = latter.split("").reverse().join('');
		if (former === latter) {
			return true;
		} 
	}
	return false;
}


console.log(isPalimdromic("abcba"));