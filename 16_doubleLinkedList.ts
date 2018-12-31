// implementation of a double linked list

// define a interface for each node
export interface doubleLinkedListNode<T> {
	value: T;
	next?: doubleLinkedListNode<T>; //next is optional, if no next is present --> undefined
	prev?: doubleLinkedListNode<T>; //prev is optional, if no next is present --> undefined
}

// define the LinkedList class
export class LinkedList<T> {
	public head?: doubleLinkedListNode<T> = undefined;
	public tail?: doubleLinkedListNode<T> = undefined;

	add(value: T) {
		const node: doubleLinkedListNode<T> = {
			value,
			next: undefined,
			prev: undefined // added prev
		};
		if (!this.head) {
			this.head = node;
		}
		if (this.tail) {
			this.tail.next = node;
			node.prev = this.tail; // added prev
		}
		this.tail = node;
	}

	dequeue(): T | undefined {
		if (this.head) {
			const value = this.head.value;
			this.head = this.head.next;
			if (!this.head) {
				this.tail = undefined;
			} else {
				this.head.next = undefined; // added next
			}
			return value;
		}
	}

	pop(): T | undefined {
		// opposite of dequeue method
		if (this.tail) {
			const value = this.tail.value;
			this.tail = this.tail.prev;
			if (!this.tail) {
				this.head = undefined;
			} else {
				this.tail.next = undefined;
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
