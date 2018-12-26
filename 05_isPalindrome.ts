// check for a simple palindrome
export const isPalindrome = (str: string): boolean => {
	const reversed = str.split('').reverse().join('');
	return reversed === str;
};

// check if any permutation of a given string is a palindrome
export const isAnyPermutationPalindrome = (str: string): boolean => {
	const unmatched = new Set<string>(); // initialize a Set with strings in it
	str.split('').forEach((char) => {
		if (unmatched.has(char)) unmatched.delete(char);
		else unmatched.add(char);
	});
	return unmatched.size <= 1;
};

// information about Sets --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Set.prototype methods --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/prototype
// information about Set.has() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
// information about Set.add() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
// information about Set.delete() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
// information about Set.size --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
