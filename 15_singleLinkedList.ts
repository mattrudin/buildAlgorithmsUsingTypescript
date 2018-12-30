// implementation of a single linked list
// FIFO

// define a interface for each node
export interface LinkedListNode<T> {
	value: T;
	next?: LinkedListNode<T>; //next is optional, if no next is present --> undefined
}

// define the LinkedList class
export class LinkedList<T> {
	public head?: LinkedListNode<T> = undefined;
	public tail?: LinkedListNode<T> = undefined;

	add(value: T) {
		const node = {
			value,
			next: undefined
		};
		if (!this.head) {
			//the first node will be the head
			this.head = node;
		}
		if (this.tail) {
			//each additional node will replace the tail
			this.tail.next = node;
		}
		this.tail = node; //each node.tail inbetweet head and tail will be pointing to the next node
	}

	dequeue(): T | undefined {
		if (this.head) {
			//dequeues the head node and sets all other properties (head, tail) to the next node
			const value = this.head.value;
			this.head = this.head.next;
			if (!this.head) {
				this.tail = undefined;
			}
			return value;
		}
	}

	// generator method for iterating over all nodes
	*values() {
		let current = this.head;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
