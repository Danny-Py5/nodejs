const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./navbar-app/index.html');
const styles = readFileSync('./navbar-app/styles.css');
const logo = readFileSync('./navbar-app/logo.svg');
const js = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    if (url == '/'){
        res.writeHead(200, 'ok', {'Content-Type': 'text/html'})
        res.end(homePage);
    };
    if (url == '/styles.css'){
        res.writeHead(200, 'ok', {'Content-Type': 'text/css'});
        res.end(styles);
    };
    if (url == '/logo.svg'){
        res.writeHead(200, 'ok', {'Content-Type': 'image/svg+xml'});
        res.end(logo);
    };
    if (url == '/browser-app.js'){
        res.writeHead(200, 'ok', {'Content-Type': 'text/javascript'});
        res.end(js);
    };
});

server.listen(5555, () => console.log('server running.....'))
