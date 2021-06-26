
import { divide } from '../calculations.js';
const test = QUnit.test;
test('test division', (expect) => {
    const expected = 5;
    const actual = divide(15, 3);
    expect.equal(actual, expected);
});
