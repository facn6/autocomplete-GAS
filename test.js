const test = require('tape');
const autoComplete = require('./src/js/autoComplete.js');

const testObj = {
    "words": ["me","va","zo","za","yu","abs","vet","veg","vee","vaw","vav","sean","seam","vaal","wins","scye", "ought","valoo","balsa","vater","balti"]
}
const testObjCopy = {
    "words": ["me","va","zo","za","yu","abs","vet","veg","vee","vaw","vav","sean","seam","vaal","wins","scye", "ought","valoo","balsa","vater","balti"]
}
const testStr = 'va';
const testStrCopy = 'va';
const testCap = 'VA'

test('Autocomplete works as pure function', (t) => {
    const actual = autoComplete(testStr, testObj)
    const actualCap = autoComplete(testCap, testObj)
    const actual2 = autoComplete(testStr, testObj)
    const expected = ["va", "vaw", "vav", "vaal", "valoo"]
    t.deepEquals(actual, expected, "gives five results of increasing length");
    t.deepEquals(testObj, testObjCopy, "does not mutate given wordlist");
    t.deepEquals(testStr, testStrCopy, "does not mutate given string");
    t.deepEquals(actual2, expected, "given same arguments gives same results");
    t.deepEquals(actualCap, expected, "Input string is case insensitive");
    t.end()
})
  

// ---------  demo URL tests -------------

// const handler = require('./src/handler.js');

// const endpoints = [
//     {url: '/unknown', status_code: 404, body: '404 server error'},
//     {url: '/', status_code: 200, body: 'view = \'fac\''},
//     {url: '/fac', status_code: 200, body: 'view = \'fac\''},
//     {url: '/dwyl', status_code: 200, body: 'view = \'dwyl\''},
//     {url: '/css/stylesheet.css', status_code: 200, body: 'body {'},
//     {url: '/js/request.js', status_code: 200},
//     {url: '/js/index.js', status_code: 200, body: 'request.get('},
//     {url: '/api/repos/fac', status_code: 200},
//     {url: '/api/repos/dwyl', status_code: 200}
// ];

// endpoints.forEach((endpoint) => {
//     test('GET :: ' + endpoint.url + ' :: returns ' + endpoint.status_code, (t) => {
//         t.plan(2);

//         handler({url: endpoint.url}, {
//         writeHead: (status, _content) => {
//             t.equal(status, endpoint.status_code);
//         },
//         end: (body) => {
//             t.ok(endpoint.body ? body.includes(endpoint.body) : body);
//         }
//         });
//     });
// });

// test.onFinish(() => process.exit(0));
  