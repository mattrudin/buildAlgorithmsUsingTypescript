// Stack implementation according LIFO principle (Last In First Out)
export class Stack<T> {
	private data: T[] = [];

	push(item: T): void {
		this.data.push(item);
	}

	pop(): T | undefined {
		return this.data.pop();
	}

	size(): number {
		return this.data.length;
	}
}
