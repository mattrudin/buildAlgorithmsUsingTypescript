// frontendmasters course including dynamic programming --> https://frontendmasters.com/courses/practical-algorithms/
// Dynamic programming: Javascript how to --> https://medium.com/@hernangarchtrom/simple-dynamic-programming-example-91a0074f55fc
// Introduction to Dynamic Programming with Examples --> https://medium.com/@davidguandev/introduction-to-dynamic-programming-with-examples-bc04dca3ccee

// Maximum Contiguous Subarray algorithm
// Returns a subarray with the largest sum

export function maximumContiguousSubarray(array: number[]): number[] {
	if (!array.length) {
		return [];
	}

	let maxInc = array[0];
	let max = array[0];
	let maxStartIndex = 0;
	let maxEndIndex = 0;

	for (let i = 1; i < array.length; i += 1) {
		const val = array[i];

		maxInc = Math.max(maxInc + val, val);
		max = Math.max(max, maxInc);

		if (val === max) {
			maxStartIndex = i;
		}
		if (maxInc === max) {
			maxEndIndex = i;
		}
	}

	return array.slice(maxStartIndex, maxEndIndex + 1);
}
