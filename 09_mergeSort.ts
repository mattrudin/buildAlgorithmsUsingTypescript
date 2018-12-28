// mergeSort function
function mergeSort(array: number[]): number[] {
	if (array.length <= 1) {
		return array;
	}
	const middle = Math.floor(array.length / 2); // determines the middle position of the array
	const left = array.slice(0, middle); // splits the array at the middle to two pieces, this is the left one
	const right = array.slice(middle); // this is the right one

	return merge(mergeSort(left), mergeSort(right)); // calls the mergeSort function recursive with the two splitted parts
}

//Merge (conquer) step of mergeSort
function merge(left: number[], right: number[]): number[] {
	const array: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex + rightIndex < left.length + right.length) {
		const leftItem = left[leftIndex];
		const rightItem = right[rightIndex];
		if (leftItem == null) {
			array.push(rightItem);
			rightIndex++;
		} else if (rightItem == null) {
			array.push(leftItem);
			leftIndex++;
		} else if (leftItem < rightItem) {
			array.push(leftItem);
			leftIndex++;
		} else {
			array.push(rightItem);
			rightIndex++;
		}
	}
	return array;
}

// visualization of the mergeSort algorithm --> https://www.youtube.com/watch?v=4VqmGXwpLqc
// Medium article with javascript example and a nice video about the mergeSort algo --> https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2
