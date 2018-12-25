// Step 1:
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

// Refactoring with booleans
for (let i = 1; i <= 100; i++) {
	const isFizz = i % 3 === 0;
	const isBuzz = i % 5 === 0;
	const isFizzBuzz = isFizz && isBuzz;
	if (isFizzBuzz) {
		console.log('FizzBuzz');
	} else if (isFizz) {
		console.log('Fizz');
	} else if (isBuzz) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}

//Remove console.log duplication
for (let i = 1; i <= 100; i++) {
	const isFizz = i % 3 === 0;
	const isBuzz = i % 5 === 0;
	const isFizzBuzz = isFizz && isBuzz;
	let result;
	if (isFizzBuzz) {
		result = 'FizzBuzz';
	} else if (isFizz) {
		result = 'Fizz';
	} else if (isBuzz) {
		result = 'Buzz';
	} else {
		result = i;
	}
	console.log(result);
}

//with ternary operator
for (let i = 1; i <= 100; i++) {
	const isFizz = i % 3 === 0;
	const isBuzz = i % 5 === 0;
	const isFizzBuzz = isFizz && isBuzz;
	let result = isFizzBuzz ? 'FizzBuzz' : isFizz ? 'Fizz' : isBuzz ? 'Buzz' : i;
	console.log(result);
}
