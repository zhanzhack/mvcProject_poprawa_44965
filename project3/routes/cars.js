
const express = require('express');
const cheerio = require('cheerio');
const path = require('path');
const router = express.Router();

let cars = [];
let nextId = 1;

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/cars-list.html'));
});

router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add-car.html'));
});

router.get('/list', (req, res) => {
    let htmlContent = '';

    if (cars.length === 0) {
        htmlContent = 'No cars have been found.';
    } else {
        const $ = cheerio.load(`<div><h2>Cars</h2><ul></ul></div>`);
        cars.forEach(car => {
            $('ul').append(`<li><p><span class="bold">make:</span> ${car.make}</p></li>`);
            $('ul').append(`<li><p><span class="bold">model:</span> ${car.model}</p></li>`);
            $('ul').append(`<li><p><span class="bold">year:</span> ${car.year}</p></li>`);
            $('ul').append(`<li><p><span class="bold">color:</span> ${car.color}</p></li>`);
        });
        htmlContent = $.html();
    }

    res.send(htmlContent);
});

router.post('/add', (req, res) => {
    const newCar = req.body;
    newCar.id = nextId++;
    cars.push(newCar);
    res.redirect('/car');
});

module.exports = router;
