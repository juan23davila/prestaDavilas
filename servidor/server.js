var express = require('express');
var bodyParser = require('body-parser');
const customerController = require('./controllers/customerController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/customers', customerController.allCustomers);
app.get('/customer/:idCustomer', customerController.getCustomerById);

var puerto = '8080';
var ip = '0.0.0.0'

app.listen(puerto, ip, function(){
    console.log("Escuchando pedidos del puerto "+puerto);
});