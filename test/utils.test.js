import { countsAsAYes } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {

    const expected = true;
    const actual = countsAsAYes('yes');

    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {

    const expected = false;
    const actual = countsAsAYes('no');

    expect.equal(actual, expected);
});