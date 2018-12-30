// Stack implementation according FIFI principle (Firs In First Out)
// implementation with plain javascript methods --> O(n) time complexity
export class QueueWithPlain<T> {
	private data: T[] = [];

	enqueue(item: T): void {
		this.data.push(item);
	}

	dequeue(): T | undefined {
		return this.data.shift();
	}
}

// implementation with a Map --> O(1) time complexity
// each item in the Map structure holds its position. The index will not change like in an array-structure(with prototype.shift()).
export class Queue<T> {
	private data: { [index: number]: T } = Object.create(null);
	private nextEnqueueIndex = 0;
	private lastDequeuedIndex = 0;

	enqueue(item: T): void {
		this.data[this.nextEnqueueIndex] = item;
		this.nextEnqueueIndex++;
	}

	dequeue(): T | undefined {
		if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
			const dequeued = this.data[this.lastDequeuedIndex];
			delete this.data[this.lastDequeuedIndex];
			this.lastDequeuedIndex++;
			return dequeued;
		}
	}

	size(): number {
		return this.nextEnqueueIndex - this.lastDequeuedIndex;
	}
}
