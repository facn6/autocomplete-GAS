const fs = require('fs');
const path = require('path');

const autoComplete = require('./autoComplete');
const words = require('../data/words.json');

const countIndex = autoComplete.buildCountIndex(words);

const router = (req, res) => {
    const url = req.url;
    const extension = url.split('.').length > 1 ? url.split('.')[1] : 'html';
    const extensionObj = {
        html: "text/html",
        css: "text/css",
        png: "image/x-icon",
        js: "application/javascript"
    };

    if (url === '/' || url === '/style.css' || url === '/app.js'|| url === '/assets/search-icon.png') {
        const folder = extension == 'png' ? '' : 'view/';
        const pathUrl = url === '/' ? 'index.html' : url;
        const filepath = path.join(__dirname, '..', '..', '/public/', folder, pathUrl);
        fs.readFile(filepath, (err, file) => {
            if (err) {
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end('server error');
            } else {
                res.writeHead(200, {'content-type': extensionObj[extension]});
                res.end(file);
            }
        });
    } else if (url.slice(0, 15) == '/api/word-list/') {
        const searchTerm = url.slice(15);
        const wordList = {
            "words" : autoComplete.filterWords(searchTerm, words, countIndex)
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
