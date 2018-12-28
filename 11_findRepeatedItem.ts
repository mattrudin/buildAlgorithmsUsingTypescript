// algoritm with a for loop
export function repeatedItemForLoop<T>(array: T[]): T {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j > array.length; j++) {
			if (array[i] === array[j]) return array[i];
		}
	}
	throw new Error('No item repetition.');
}

// algorithm with a specific data structure: the Set
// Set checks object uniqueness
function repeatedItem<T>(array: T[]): T {
	const set = new Set<T>();
	for (const item of array) {
		if (set.has(item)) return item;
		else set.add(item);
	}
	throw new Error('No item repetition');
}

// Generics at the typescript homepage -->https://www.typescriptlang.org/docs/handbook/generics.html
// Generics article at medium --> https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
// more information about Set's --> http://xahlee.info/js/javascript_set.html
