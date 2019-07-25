const test = require('tape');
const autoComplete = require('./src/Helpers/autoComplete.js');

const testObj = {
    "words": ["me","va","zo","za","yu","abs","vet","veg","vee","vaw","vav","sean","seam","vaal","wins","scye", "ought","valoo","valsa","vater","valti"]
}
const testObjCopy = JSON.parse(JSON.stringify(testObj));

const countIndex = { '2': 0, '3': 5, '4': 11, '5': 16, end: 21 }
const testStr = testStrCopy = 'va';
const testStrCap = 'VA';

test('autoComplete.buildCountIndex works as a pure function', (t) => {
    const actual = autoComplete.buildCountIndex(testObj)
    const actual2 = autoComplete.buildCountIndex(testObj)
    t.deepEquals(actual, countIndex, "gives five results of increasing length");
    t.deepEquals(testObj, testObjCopy, "does not mutate given wordlist");
    t.deepEquals(actual2, countIndex, "given same arguments gives same results");
    t.end();
})

test('autoComplete.filterWords works as pure function', (t) => {
    const actual = autoComplete.filterWords(testStr, testObj, countIndex)
    const actualCap = autoComplete.filterWords(testStrCap, testObj, countIndex)
    const actual2 = autoComplete.filterWords(testStr, testObj, countIndex)
    const expected = ["vaw", "vav", "vaal", "valoo", 'valsa']
    t.deepEquals(actual, expected, "gives five results of increasing length");
    t.deepEquals(testObj, testObjCopy, "does not mutate given wordlist");
    t.deepEquals(testStr, testStrCopy, "does not mutate given string");
    t.deepEquals(actual2, expected, "given same arguments gives same results");
    t.deepEquals(actualCap, expected, "Input string is case insensitive");
    t.end();
})
