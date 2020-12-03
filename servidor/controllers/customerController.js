var connection = require('../lib/connectionBD');

function allCustomers(req, res){
    var getAllCustomersQuery = "SELECT * FROM Customer\n"+
                               "order by custName"; 
    connection.query(getAllCustomersQuery, function(error, result, fields){
        if(error){
            console.log("Hubo un error al obtener la lista de clientes", error.message);
            return res.status(404).send("Hubo un error en la consulta allCustomers");
        }
        //if(result.lenght == 0)
        var response = {
            'clientes': result
        };
        
        res.send(response);
    });
}

/**
 * Get customer by id
 */
function getCustomerById(req, res){
    var customerId = req.params.idCustomer;
    var getCustomerByIdQuery = "SELECT * FROM Customer\n"+
                               "WHERE idCustomer = "+customerId;

    connection.query(getCustomerByIdQuery, function(error, result, fields){
        if(error){
            console.log("Hubo un error al obtener información del cliente "+customerId, error.message);
            return res.status(404).send("Hubo un error en la consulta getCustomerById");
        }
        //if(result.lenght == 0)
        
        res.json(result);
    });
}


/**
 * Insert new Customer
 */
function insCustomer(req, res){
    var newCustomer = req.body;
    var customerType = newCustomer.customerType;
    var numIdent = "'"+newCustomer.numIdent+"'";
    var custName = "'"+newCustomer.custName+"'";
    var custLastName = "'"+newCustomer.custLastName+"'";
    var cellPhone = newCustomer.cellPhone ? "'"+newCustomer.cellPhone+"'" : null;
    var phone = newCustomer.phone ? "'"+newCustomer.phone+"'" : null;
    var address = newCustomer.address ? "'"+newCustomer.address+"'" : null;
    var email = newCustomer.email ? "'"+newCustomer.email+"'" : null;
    var registerDate = "'"+newCustomer.registerDate+"'";
    var insCustomerQuery = "INSERT INTO Customer (\n"+
                                "customerType,\n"+
                                "numIdent,\n"+
                                "custName,\n"+
                                "custLastName,\n"+
                                "cellPhone,\n"+
                                "phone,\n"+
                                "address,\n"+
                                "email,\n"+
                                "registerDate)\n"+
                            "VALUES (\n"+
                                customerType+",\n"+
                                numIdent+",\n"+
                                custName+",\n"+
                                custLastName+",\n"+
                                cellPhone+",\n"+
                                phone+",\n"+
                                address+",\n"+
                                email+",\n"+
                                registerDate+")";

    console.log(insCustomerQuery);
    connection.query(insCustomerQuery, function(error, result, fields){
        if(error){
            console.log("Hubo un error al insertar cliente nuevo", error.message);
            return res.status(404).send("Hubo un error en la consulta insCustomer");
        }

        res.json(result);
    });
}

/**
 * Allow update info from customer
 */
function updCustomer(req, res){
    var updCustomerQuery = "UPDATE 'Customer' SET 'numIdent' = '1094555555', 'custName' = 'Andrés Felipe' WHERE 'Customer'.'idCustomer' = 3"
}

/**
 * Deactivate customer
 */
function deactivateCustomer(req, res){
    var updCustomerQuery = "UPDATE 'Customer' SET 'active' = 'N' WHERE 'Customer'.'idCustomer' = 3;"
}

/**
 * Activate customer
 */
function activateCustomer(req, res){
    var updCustomerQuery = "UPDATE Customer SET 'active' = 'Y' WHERE 'Customer'.'idCustomer' = 3;"
}

module.exports = {
    allCustomers : allCustomers,
    getCustomerById : getCustomerById,
    insCustomer : insCustomer
}