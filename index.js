const http = require('http');
const port = 3000;

const fs = require('fs');

const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
        if (err) throw err;
        console.log('success')
    });
    response.end(`We're handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log(`Oh no, you have an error:  ${err}`);
    }
    console.log(`Server is listening on ${port}`);
})