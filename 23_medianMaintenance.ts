// The following method keeps a running account of the median
export class MedianMaintenanceArray {
	private data: number[] = [];
	add(item: number): number {
		for (let index = 0; index < this.data.length; index++) {
			if (item < this.data[index]) {
				this.data.splice(index, 0, item);
				return this.median();
			}
		}
		this.data.push(item);
		return this.median();
	}

	private median() {
		if (this.data.length % 2 == 0) {
			// if even
			const middle2 = this.data.length / 2;
			const middle1 = middle2 - 1;
			return (this.data[middle1] + this.data[middle2]) / 2;
		} else {
			// if odd
			const middle = Math.floor(this.data.length / 2);
			return this.data[middle];
		}
	}
}

// The Heap is a perfect data structure for this application
import { Heap } from './19_heapStructure';

export class MedianMaintenanceHeap {
	private lowMaxHeap = new Heap<number>((b, a) => a - b);
	private highMinHeap = new Heap<number>((a, b) => a - b);

	add(item: number): number {
		//Adds the number to the state of the object
		if (this.lowMaxHeap.size() == 0 || item < this.lowMaxHeap.peek()) {
			this.lowMaxHeap.add(item);
		} else {
			this.highMinHeap.add(item);
		}

		//Rebalance
		const biggerHeap = this.lowMaxHeap.size() > this.highMinHeap.size() ? this.lowMaxHeap : this.highMinHeap;
		const smallerHeap = biggerHeap === this.lowMaxHeap ? this.highMinHeap : this.lowMaxHeap;

		if (biggerHeap.size() - smallerHeap.size() > 1) {
			smallerHeap.add(biggerHeap.extractRoot());
		}

		//Returns the median
		if (this.lowMaxHeap.size() === this.highMinHeap.size()) {
			return (this.lowMaxHeap.peek() + this.highMinHeap.peek()) / 2;
		} else {
			return this.lowMaxHeap.size() > this.highMinHeap.size() ? this.lowMaxHeap.peek() : this.highMinHeap.peek();
		}
	}
}
