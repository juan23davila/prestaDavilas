//require("../modelo/modeloCliente");

//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';
const loanController = new LoanController();
const customerModel = new ModeloCliente();
let navbarUtilities = new NavbarUtilities();
let globalIdCustomer = 0;

function CustomerController(){

    //get list active customers
    this.getActiveCustomers = function(){
        customerModel.getCustomers();
        buttonsUtilities.createAddCustomerButton();
        navbarUtilities.reestablishBootomBar();
    }

    // Set new customer
    this.setNewCustomer = async function (customer) {
        let newCustomer = readSerializedDate(customer)
        await customerModel.postCustomer(newCustomer);
        this.getActiveCustomers();
    }

    this.getCustomer = async function (idCustomer) {
        globalIdCustomer = idCustomer;
        navbarUtilities.removeBottonMarignNavBar();
        await customerModel.getCustomer(idCustomer);
        loanController.getLoansFromUserId(idCustomer);
    }

    this.updCustomer = async function(customerToUpdData) {
        let updCustomer = readSerializedDate(customerToUpdData);
        await customerModel.putCustomer(updCustomer, globalIdCustomer);
        this.getCustomer(globalIdCustomer);
    }

    this.rmCustomer = async function(idCustomer) {
        await customerModel.rmCustomer(idCustomer);
        this.getActiveCustomers();
    }
}

function readSerializedDate(customer) {
    let newCustomer = {}
    customer.forEach(element => {
        switch (element.name) {
            case "numIdent":
                newCustomer['numIdent'] = element.value;
                break;
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
            case "phone2":
                newCustomer['phoneTwo'] = element.value;
                break;
            case "address":
                newCustomer['address'] = element.value;
                break;       
            case "email":
                newCustomer['email'] = element.value;
                break;    
            default:
                break;
        }
    });

    return newCustomer;
}