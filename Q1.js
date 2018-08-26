function answer(n) {
	if( n < 1 || n > 30 || isNaN(n) ) {
		alert("Please enter a valid number within 1~30");
	} else if ( n === 1 ) {
		console.log("*");
	} else {
		// let array = [];
		for (let i = 0; i < n; i++) {
			let star = "*";
			var result = "*";
			// array.push(result);
			for (let j = 0; j < i; j++) {
				result = result + "\n" + result + star;
			}
		}
		console.log(result);
	}
}
answer(2);
