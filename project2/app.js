

const http = require('http');
const routes = require('./routes/index')

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        routes.handleHome(req, res);
    }
    else if (req.method === 'GET' && req.url === '/car') {
        routes.handleCar(req, res);
    }
    else if (req.method === 'GET' && req.url === '/add-car') {
        routes.handleAddCar(req, res);
    }
    else if (req.method === 'POST' && req.url === '/add-car') {
        routes.handleAddCar(req, res);
    }
    else {
        routes.handlePageNotFound(req, res);
    }
});


server.listen(PORT, (req, res) => {
    console.log(`Server running on 127.0.0.1:${PORT}`)
})