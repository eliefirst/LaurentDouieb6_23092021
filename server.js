const http = require('http');

const server = http.createServer((req,res) => {
    res.end('coucou c est ici');
});
server.listen(process.env.PORT || 3000);