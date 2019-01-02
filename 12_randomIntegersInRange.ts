// Return a random integer >=start and <=end
export function randomInt(start: number, end: number): number {
	return start + Math.floor(Math.random() * (end - start));
}
