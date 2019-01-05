import { Heap, CompareFn } from './19_heapStructure';

export function heapSort<T>(array: T[], compare: CompareFn<T>): T[] {
	const heap = new Heap(compare);
	for (const item of array) {
		heap.add(item);
	}
	const result: T[] = [];
	for (let index = 0; index < array.length; index++) {
		result.push(heap.extractRoot());
	}
	return result;
}
