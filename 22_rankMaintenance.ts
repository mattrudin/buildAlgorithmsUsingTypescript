// Maintains a minimum value
export class MinimumArray {
	data: number[] = [];
	add(item: number) {
		for (let index = 0; index < this.data.length; index++) {
			if (item > this.data[index]) {
				this.data.splice(index, 0, item);
				return;
			}
		}
		this.data.push(item);
	}
	extract(): number | undefined {
		return this.data.pop();
	}
}

// Subclass for the maximum value
export class MaximumArray extends MinimumArray {
	add(item: number) {
		for (let index = 0; index < this.data.length; index++) {
			if (item < this.data[index]) {
				this.data.splice(index, 0, item);
				return;
			}
		}
		this.data.push(item);
	}
}

// in practice
const maintain = new MinimumArray();
[ 1, 4, 2, 5 ].forEach((x) => maintain.add(x));
let curr = maintain.extract();
while (curr != null) {
	console.log(curr);
	curr = maintain.extract();
}

// A better data structure would be a Heap
import { Heap } from './19_heapStructure';

const maintainHeap = new Heap<number>((a, b) => a - b);
[ 1, 4, 2, 5 ].forEach((x) => maintainHeap.add(x));
let currHeap = maintainHeap.extractRoot();
while (currHeap != null) {
	console.log(currHeap);
	currHeap = maintainHeap.extractRoot();
}
