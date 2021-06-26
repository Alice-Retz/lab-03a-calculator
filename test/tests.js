
import { multiply } from '../calculations.js';
const test = QUnit.test;
test('test multiplication', (expect) => {
    const expected = 15;
    const actual = multiply(5, 3);
    expect.equal(actual, expected);
});
