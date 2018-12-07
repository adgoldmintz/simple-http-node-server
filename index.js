const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log('success')
    response.end(`We're handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log(`Oh no, you have an error:  ${err}`);
    }
    console.log(`Server is listening on ${port}`);
});