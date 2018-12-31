// function with built in methods

export const stringToIngeger = (str: string): number => parseInt(str);

// with additional NaN detection
export const stringToIngegerNaN = (str: string): number => {
	if (/^\-?)[0-9]+)$/.test(str)) return parseInt(str);
	return NaN;
};

// implementation without integrated JS method
export const stringToIngegerAlt = (str: string): number => {
	const zeroCode = '0'.charCodeAt(0); // => 48

	let sign = 1;
	if (str[0] === '-') {
		str = str.substring(1); // returns string from index 1 to the end, without the "-"
		sign = -1;
	}

	let acc = 0;
	for (const char of str) {
		// iterates over the string, converts the char to an integer and accumulate the integers
		acc = acc * 10 + (char.charCodeAt(0) - zeroCode); // code in parentheses returns the charCodeAt as UTF-16 code and subtracts 48 off of it
	}

	return sign * acc; //returns either (acc * 1) or (acc * -1)
};

// String.prototype.charCodeAt() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// String.prototype.substring() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
