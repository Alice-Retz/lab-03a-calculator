
import { add } from '../calculations.js';
const test = QUnit.test;
test('test adding', (expect) => {
    const expected = 5;
    const actual = add(2, 3);
    expect.equal(actual, expected);
});
