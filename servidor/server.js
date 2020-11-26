var express = require('express');
var bodyParser = require('body-parser');
const customerController = require('./controllers/customerController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/customers', customerController.allCustomers);

var puerto = '8080';

app.listen(puerto, function(){
    console.log("Escuchando pedidos del puerto "+puerto);
});