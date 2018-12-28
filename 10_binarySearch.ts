// binary search algorithm with a for loop

export function binarySearchForLoop(array: number[], element: number): number {
	for (let i = 1; i < array.length; i++) {
		if (array[i] === element) return i;
	}
	return -1;
}

// algorithm with prototype.findIndex()
export function binarySearchFindIndex(array: number[], element: number): number {
	return array.findIndex((number) => number === element);
}

// algorithm with recursive algorithm
function binarySearch(array: number[], element: number, start = 0, end = array.length - 1): number {
	if (end < start) return -1;
	const middle = Math.floor((start + end) / 2);
	return element === array[middle]
		? middle
		: element < array[middle]
			? binarySearch(array, element, start, middle - 1)
			: binarySearch(array, element, middle + 1, end);
}

// information about the algorithm at khan academy --> https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// medium article --> https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3
