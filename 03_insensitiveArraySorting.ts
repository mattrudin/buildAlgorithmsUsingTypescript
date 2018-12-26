const foo: string[] = [ 'Alpha', 'beta', 'Gamma', 'delta' ];

foo.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

//without mutation:
const bar: ReadonlyArray<string> = [ 'Alpha', 'beta', 'Gamma', 'delta' ];

const barSortedCopy = [ ...bar ].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

//more information about .localeCompare --> https://www.dotnetperls.com/sort-js
