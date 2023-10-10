const rewire = require("rewire");

describe("1. filterRange", () => {
  test("`filterRange` function should return an array containing only the elements within the specified range", () => {
    const filterRange = rewire("../index.js").__get__("filterRange");
    expect(filterRange([6, 2, 3, 1], 1, 4)).toEqual([2, 3, 1]);
  });
});

describe("2. filterRangeInPlace", () => {
  test("`filterRangeInPlace` function should remove the elements with values outside of the range from original array", () => {
    const filterRangeInPlace = rewire("../index.js").__get__("filterRangeInPlace");
    const array = [6, 4, 2, 3, 1]
    filterRangeInPlace(array, 1, 4)
    expect(array).toEqual([4, 2, 3, 1]);
  });
});  