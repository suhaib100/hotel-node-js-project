
const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const MenuItem = require('./models/MenuItem');
// const Person = require('./models/person');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello suhaib and sameer! and shariq!');
});

app.get('/chicken', (req, res) => {
    var items = {
        name: "suhaib",
        last: "khan",
        age: 20,
        isChutney: false
    };
    res.send(items);
});












const personRoutes = require('./routes/personRoutes');
app.use('/person' , personRoutes);



const menuRoutes = require('./routes/menuRoutes');
app.use('/menu' , menuRoutes);

app.listen(3000, () => {
    console.log("server is running on 3000");
});
