const flatten = require('./flatten');

const flat = [1, 2, 3, 4, 5, 6];
const flatJSON = JSON.stringify(flat);

const oneLevelNested = [ [ 1, 2 ], 3, [ 4, 5, 6 ] ];
const twoLevelsNested = [ [ [ 1, 2 ], 3 ], [ 4, 5, 6 ] ];
const threeLevelsNested = [ [ [ 1, [ 2, 3 ] ], 4 ], [ 5, 6 ] ];

it('should flatten nested arrays', () => {
  expect(JSON.stringify(flatten(oneLevelNested))).toBe(flatJSON);
});

it('should flatten two-level-nested arrays', () => {
  expect(JSON.stringify(flatten(twoLevelsNested))).toBe(flatJSON);
});

it('should flatten three-level-nested arrays', () => {
  expect(JSON.stringify(flatten(threeLevelsNested))).toBe(flatJSON);
});
