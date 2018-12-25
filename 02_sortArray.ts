//[].sort() mutates the array
const arr = [ 3, 2, 1 ];
arr.sort();
console.log(arr); //=> [1,2,3]

//solution with typescript:
const arrTS: ReadonlyArray<number> = [ 3, 2, 1 ];
//@ts-ignore
arrTS.sort(); //TS problem: Property 'sort' does not exist on type 'ReadonlyArray<number>'.

//to get a sorted copy of it:
const copy1 = [ ...arrTS ].sort();
const copy2 = arrTS.slice().sort();
