// insertionSort algorithm
function insertionSort(array: number[]): number[] {
	//input [10,9]
	array = array.slice(); // or: array = [...array];
	for (let i = 1; i < array.length; i++) {
		const current = array[i]; //=> 9
		let j = i - 1; //=> 0
		while (j >= 0 && array[j] > current) {
			//array[j] === array[0] === 10
			array[j + 1] = array[j]; // => [10,10]
			j--; //=> -1
		}
		array[j + 1] = current; //array[j+1] === array[-1+1] === array[0] => [9,10]
	}
	return array;
}

const unsortedArray = [ 10, 9 ];

// alternative solution:
export const insertionSortAlternative = (array: number[]): number[] => {
	for (var i = 0; i < array.length; i++) {
		let value = array[i];
		// store the current item value so it can be placed right
		for (var j = i - 1; j > -1 && array[j] > value; j--) {
			// loop through the items in the sorted array (the items from the current to the beginning)
			// copy each item to the next one
			array[j + 1] = array[j];
		}
		// the last item we've reached should now hold the value of the currently sorted item
		array[j + 1] = value;
	}
	return array;
};

// more information about insertion sort --> https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
