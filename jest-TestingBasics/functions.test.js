const functons = require("./functions");
test('Adds 2+2 equals 4 ', () => {
  expect(functons.add(2,2)).toBe(4);
})
//not
test('2+2 not equals 5', () => {
    expect(functons.add(2,2)).not.toBe(5);
})
//to be null
test('check to see if Null', () => {
    expect(functons.isNull()).toBeNull();
})
//to be falsy
test('check to see if it is Falsy', () => {
    expect(functons.check(null)).toBeFalsy();
})