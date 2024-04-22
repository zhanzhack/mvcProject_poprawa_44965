
const fs = require('fs');
const querystring = require('querystring');

const home  = require('../views/home')
const car  = require('../views/car')
const add_car  = require('../views/add-car')


function handleHome(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(home.renderPage());
    response.end();
}


function handleAddCar(request, response) {
    if (request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write(add_car.renderPage('add-car'));
        response.end();
        
    } else if (request.method === 'POST') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            const formData = querystring.parse(body);
            const formDataJson = JSON.stringify(formData);
            fs.writeFile('formData.json', formDataJson, err => {
            if (err) {
                console.error(err);
                response.statusCode = 500;
                response.end('Error saving data');
                return;
            }

            response.statusCode = 302;
            response.setHeader('Location', '/car');
            response.end();
            });
        });
    }
}

function handleCar(request, response) {
    fs.access('formData.json', fs.constants.F_OK, (err) => {
        if (err) {
            console.error('File does not exist');
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.write('File not found');
            response.end();
            return;
        }
        fs.readFile('formData.json', (err, data) => {
            if (err) {
                console.error(err);
                response.statusCode = 500;
                response.end();
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(car.renderPage(data));
            response.end();
        });
    });
}

function handlePageNotFound(request, response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('404 Page Not Found');
    response.end();
}


module.exports = { 
    handleHome, handleAddCar, handleCar, handlePageNotFound 
};