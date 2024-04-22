
const http = require('http');
const carsModule = require('./cars.js');
const htmlGenerator = require('./htmlGenerator.js')

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const cars = carsModule.getCars();

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(htmlGenerator.getHTMLDocumentStart());
    res.write('<body>');
    res.write('<p>');
    res.write(carsModule.getCarInformation(3)); 
    res.write('</p>');

    res.write('<p>');
    res.write(carsModule.getCarAge(3)); 
    res.write('</p>');

    res.write('</body>');
    res.write(htmlGenerator.getHTMLDocumentEnd());

    res.end();
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
