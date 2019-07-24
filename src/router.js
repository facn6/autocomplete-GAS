const fs = require('fs');
const path = require('path');

const router = (req, res) => {
    const url = req.url;
    
    if (url === "/")
    {   
        const filepath = path.join(__dirname + '..' + '/..' + '/public/index.html');
        fs.readFile(filepath,(error,file)=>{
            if(error){
                res.writeHead(500,{'content-type':'text/html'})
                res.end(error);
            }
            else{
                res.writeHead(200,{'content-type': 'text/html'});
                res.end(file);
            }
        })
    }
    else if (url === "/style.css")
    {
        const filepath = path.join(__dirname + '..' + '/..' + '/public/style.css');
        fs.readFile(filepath,(error,file)=>{
            if(error){
                res.writeHead(500,{'content-type': 'text/html'});
                res.end(error);
            }
            else{
                console.log('style else',filepath);
                res.writeHead(200,{'content-type': 'text/css'});
                res.end(file);
            }
        })
    }
    else if (url === '/assets/search-icon.png')
    {
        const filepath = path.join(__dirname + '..' + '/..' + '/public'+url);
        fs.readFile(filepath,(error,file)=>{
            if(error){
                res.writeHead(500,{'content-type': 'text/html'});
                res.end(error);
            }
            else{
                res.writeHead(200,{'content-type': 'image/x-icon'});
                res.end(file);
            }
        })
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('404 server error');
    }
}

module.exports = router;
