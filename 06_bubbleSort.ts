// simple bubbleSort algorithm with two for-loops
export const bubbleSortConcept = (array: number[]): number[] => {
	array = [ ...array ]; // immutability: copy the input array
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
			}
		}
	}
	return array;
};

// bubbleSort algorithm with a endFast approach
// algo will return if the
export const bubbleSort = (array: number[]): number[] => {
	array = [ ...array ];
	while (true) {
		let swapped = false;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return array;
};

// same approach with prototype.map
// element1 or element2 will not be used, only the index is crucial
export const bubbleSortMap = (array: number[]): number[] => {
	array.map((element1) =>
		array.map((element2, i) => {
			if (array[i] > array[i + 1]) {
				[ array[i], array[i + 1] ] = [ array[i + 1], array[i] ];
			}
		})
	);
	return array;
};

// more information about the algorithm --> https://codeburst.io/bubble-sort-algorithm-in-javascript-3f2951d227c8
// blogpost with alternative solutions --> http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
