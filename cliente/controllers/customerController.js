//require("../modelo/modeloCliente");

//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';
let customerModel = new ModeloCliente();

function CustomerController(){

    //get list active customers
    this.getActiveCustomers = function(){
        customerModel.getCustomers();
    }

    // Set new customer
    this.setNewCustomer = function (customer) {
        let newCustomer = {}


        customer.forEach(element => {

            switch (element.name) {
                case "numIdent":
                    newCustomer['numIdent'] = element.value;
                    break;
                case "custName":
                    newCustomer['custName'] = element.value;
                    break;
                case "custLastName":
                    newCustomer['custLastName'] = element.value;
                    break;
                case "cellPhone":
                    newCustomer['cellPhone'] = element.value;
                    break;
                case "phone":
                    newCustomer['phone'] = element.value;
                    break;  
                case "phoneTwo":
                    newCustomer['phoneTwo'] = element.value;
                    break;
                case "address":
                    newCustomer['address'] = element.value;
                    break;            
                default:
                    break;
            }
        });

        customerModel.postCustomer(newCustomer);
    }
}