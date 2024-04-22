
const express = require('express');
const app = express();
const PORT = 3000;

const homeRoutes = require('./routes/home.js');
const carsRoutes = require('./routes/cars.js');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/car', carsRoutes);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
