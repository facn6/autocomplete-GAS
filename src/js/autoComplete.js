const buildCountIndex = (words) => {
    let obj = {2: 0};
    obj.end = words.words.length;

    let length = 2;
    words.words.map((word, ind)=>{
        if(word.length > length) {
            length++;
            obj[length] = ind;
        }
    });
    
    return obj;
};


const filterWords = (testStr, words, countIndex) => {
    const str = testStr.toLowerCase();
    let wordLengthLimit = str.length + 6 < Object.keys(countIndex).length + 1 ? str.length + 6 : 'end'

    let list = [];
    let count = countIndex[str.length + 1];
    let limit = countIndex[wordLengthLimit];
    do {
        if (words.words[count].slice(0, str.length) == str) {
            list.push(words.words[count])
        }
        count++;
    } while (list.length < 5 && count < limit)

    return list;
};

module.exports = {buildCountIndex, filterWords};


// ----- countIndex reference --------

// const countIndex = {
//     2: 0,
//     3: 124,
//     4: 1435,
//     5: 6963,
//     6: 19614,
//     7: 42030,
//     8: 75322,
//     9: 115964,
//     10: 157190,
//     11: 193063,
//     12: 221177,
//     13: 241631,
//     14: 255608,
//     15: 264821,
//     16: 270633,
//     17: 272577,
//     18: 273704,
//     19: 274299,
//     20: 274628,
//     21: 274788,
//     22: 274850,
//     23: 274880,
//     24: 274893,
//     25: 274902,
//     26: 274904,
//     27: 274905,
//     28: 274906,
//     'end': 274907
// }