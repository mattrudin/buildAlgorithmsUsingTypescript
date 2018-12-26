// with sort()
export function isAnagrams(s1: string, s2: string): boolean {
	const s1Sorted = s1.toLocaleLowerCase().split('').sort().join('');
	const s2Sorted = s2.toLocaleLowerCase().split('').sort().join('');
	return s1Sorted === s2Sorted;
}

// advanced version with a map object
function areAnagrams(s1: string, s2: string): boolean {
	const charCount = new Map<string, number>(); // initialize map with string keys and number values
	for (const char of s1.split('')) {
		// iterates over the s1 array
		charCount.set(char, (charCount.get(char) || 0) + 1); //adds 1 to the map.char
	}
	for (const char of s2.split('')) {
		// iterates over the s2 array
		if (!charCount.has(char)) return false;
		charCount.set(char, charCount.get(char) - 1); // subtracts 1 off of the map.char
	}
	return Array.from(charCount.values()).every((val) => val === 0); //returns boolean true if all map.char is equal 0, otherwise returns false
}

// information about map objects in javascript --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Medium article --> https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
// information about map.set() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
// information about map.get() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
