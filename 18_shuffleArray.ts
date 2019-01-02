// the following implementation is called the "fisherYatesShuffle"

import { randomInt } from './12_randomIntegersInRange';

export function shuffle<T>(array: T[]): T[] {
	array = [ ...array ];

	for (let i = 0; i < array.length; i++) {
		const randomChoiceIndex = randomInt(i, array.length);
		[ array[i], array[randomChoiceIndex] ] = [ array[randomChoiceIndex], array[i] ];
	}

	return array;
}
