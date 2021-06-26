
import { subtract } from '../calculations.js';
const test = QUnit.test;
test('test subtraction', (expect) => {
    const expected = 2;
    const actual = subtract(5, 3);
    expect.equal(actual, expected);
});
