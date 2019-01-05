/*
                O
           ╱       ╲
         ↙            ↘
       O                O
     ↙   ↘           ↙    ↘
   O       O        O       O
 ↙  ↘    ↙  ↘    ↙  ↘    ↙  ↘
O    O   O   O   O    O   O   O

level 0 : 1 (2 ^ 0)
level 1 : 2 (2 ^ 1)
level 2 : 4 (2 ^ 2)
...

2^0 + 2^1 + 2^2 + 2^3 .... + 2^n


*/

//Returns the max items that can exist in a perfectly balanced binary tree
export function maxItems(height: number): number {
	return 2 ** height - 1;
}

//Returns the max height of a balanced binary tree given n items
export function maxHeight(items: number): number {
	return Math.log2(items + 1);
}
