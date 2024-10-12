const { sum } = require("../sum");

test("calculate sum", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
