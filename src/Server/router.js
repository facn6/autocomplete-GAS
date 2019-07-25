const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const url = require('url');

const autoComplete = require('../Helpers/autoComplete.js');
const words = require('../Database/words.json');

const countIndex = autoComplete.buildCountIndex(words);

const router = (req, res) => {
    const urlObj = url.parse(req.url);
    const pathName = urlObj.pathname
    const extension = pathName.split('.').length > 1 ? pathName.split('.')[1] : 'html';
    const extensionObj = {
        html: "text/html",
        css: "text/css",
        png: "image/x-icon",
        js: "application/javascript"
    };

    if (pathName === '/' || pathName === '/style.css' || pathName === '/app.js'|| pathName === '/assets/search-icon.png') {
        const folder = extension == 'png' ? '' : 'view/';
        const endPath = pathName === '/' ? 'index.html' : pathName;
        const filepath = path.join(__dirname, '..', '..', '/public/', folder, endPath);
        fs.readFile(filepath, (err, file) => {
            if (err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end('server error');
            } else {
                res.writeHead(200, {'content-type': extensionObj[extension]});
                res.end(file);
            }
        });
    } else if (pathName == '/api/word-list') {
        const word = querystring.parse(urlObj.query).word
        const wordList = {
            "words" : autoComplete.filterWords(word, words, countIndex)
        }
        res.writeHead(200, {'content-type': "application/json"});
        res.end(JSON.stringify(wordList));        
    } else {
        res.writeHead(404, {
            'content-type': 'text/plain'
        });
        res.end('404: page not found');
    }
}

module.exports = router;
