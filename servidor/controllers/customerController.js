var connection = require('../lib/connectionBD');

/**
 * Obtiene todos los clientes
 */
function allCustomers(req, res){
    var getAllCustomersQuery = "SELECT * FROM Customer\n"+
                               "WHERE active = 'Y'\n"+
                               "order by custName"; 
    connection.query(getAllCustomersQuery, function(error, result, fields){
        if(error){
            console.log("Hubo un error al obtener la lista de clientes", error.message);
            return res.status(404).send("Hubo un error en la consulta allCustomers");
        }

        if(result.length == 0){
            return res.status(404).json("No se encontraron clientes registrados");
        }

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
            return res.status(500).send("Hubo un error en la consulta getCustomerById");
        }
        
        if(result.length == 0){
            return res.status(404).json("No existe cliente con el identificador "+customerId);
        }
        
        res.json(result);
    });
}


/**
 * Insert new Customer
 */
function insCustomer(req, res){
    var newCustomer = req.body;
    if(!newCustomer.numIdent){
        return res.status(422).json('El campo "Número de identificación" debe contener un valor.');
    }
    if(isNaN(newCustomer.numIdent)){
        return res.status(422).json('El campo "Número de identificación" debe ser numérico: '+newCustomer.numIdent);
    }
    var numIdent = "'"+newCustomer.numIdent+"'";

    if(newCustomer.custName.length < 3){
        return res.status(422).json('El nombre debe contener al menos 3 caracteres');
    }
    var custName = "'"+newCustomer.custName+"'";
    
    if(newCustomer.custLastName.length < 3){
        return res.status(422).json('El apellido debe contener al menos 3 caracteres');
    }
    var custLastName = "'"+newCustomer.custLastName+"'";
    var cellPhone = newCustomer.cellPhone ? "'"+newCustomer.cellPhone+"'" : null;
    var phone = newCustomer.phone ? "'"+newCustomer.phone+"'" : null;
    var phoneTwo = newCustomer.phoneTwo ? "'"+newCustomer.phoneTwo+"'" : null;
    var address = newCustomer.address ? "'"+newCustomer.address+"'" : null;
    var email = newCustomer.email ? "'"+newCustomer.email+"'" : null;


    var insCustomerQuery = "INSERT INTO Customer (\n"+
                                "numIdent,\n"+
                                "custName,\n"+
                                "custLastName,\n"+
                                "cellPhone,\n"+
                                "phone,\n"+
                                "phoneTwo,\n"+
                                "address,\n"+
                                "email)\n"+
                            "VALUES (\n"+
                                numIdent+",\n"+
                                custName+",\n"+
                                custLastName+",\n"+
                                cellPhone+",\n"+
                                phone+",\n"+
                                phoneTwo+",\n"+
                                address+",\n"+
                                email+")";
                                
    connection.query('SELECT * FROM Customer WHERE numIdent = '+numIdent,
    function(errorQuery, resultQuery, fieldsQuery){
        if(errorQuery){
            return res.status(500).json("Error al consultar si existia cliente en insCustomer: "+error);
        }
        if(resultQuery.length > 0){
            return res.status(422).json("Ya existe un cliente con el número de documento "+numIdent);
        }
        connection.query(insCustomerQuery, function(error, result, fields){
            if(error){
                console.log("Hubo un error al insertar cliente nuevo", error.message);
                return res.status(500).send("Hubo un error en la consulta insCustomer: "+error);
            }
    
            res.json("Se insertó correctamente el cliente: "+result.insertId);
        });
    });
}

/**
 * Allow update info from customer
 */
function updCustomer(req, res){
    var customerToUpd = req.body;
    var idCustomer = "'"+req.params.idCustomer+"'";
    var numIdent = "'"+customerToUpd.numIdent+"'";
    var custName = "'"+customerToUpd.custName+"'";
    var custLastName = "'"+customerToUpd.custLastName+"'";
    var cellPhone = customerToUpd.cellPhone ? "'"+customerToUpd.cellPhone+"'" : null;
    var phone = customerToUpd.phone ? "'"+customerToUpd.phone+"'" : null;
    var phoneTwo = customerToUpd.phoneTwo ? "'"+customerToUpd.phoneTwo+"'" : null;
    var address = customerToUpd.address ? "'"+customerToUpd.address+"'" : null;
    var email = customerToUpd.email ? "'"+customerToUpd.email+"'" : null;
    var updCustomerQuery = "UPDATE Customer\n"+
                           "SET numIdent = "+numIdent+",\n"+
                           "    custName = "+custName+",\n"+
                           "    custLastName = "+custLastName+",\n"+
                           "    cellPhone = "+cellPhone+",\n"+
                           "    phone = "+phone+",\n"+
                           "    phoneTwo = "+phoneTwo+",\n"+
                           "    address = "+address+",\n"+
                           "    email = "+email+"\n"+
                           "WHERE Customer.idCustomer = "+idCustomer;

    connection.query(updCustomerQuery,
        function (error, results, fields){
            if(error){
                console.log("Hubo un error al actualizar el cliente: "+idCustomer, error.message);
                return res.send("Hubo un error en la consulta updCustomer");
            }

            res.json(results);
        }
    );
}

/**
 * Deactivate customer
 */
function deactivateCustomer(req, res){
    var idCustomer = req.params.idCustomer;
    var updCustomerQuery = "UPDATE Customer SET active = 'N'\n"+
                           "WHERE Customer.idCustomer = "+idCustomer;

    connection.query(updCustomerQuery,
        function (error, results, fields){
            if(error){
                console.log("Hubo un error al desactivar el cliente: "+idCustomer, error.message);
                return res.status(404).send("Hubo un error en la consulta deactivateCustomer");
            }

            res.json(results);
        }
    );
}

/**
 * Activate customer
 */
function activateCustomer(req, res){
    var idCustomer = req.params.idCustomer;
    var updCustomerQuery = "UPDATE Customer SET active = 'Y'\n"+
                           "WHERE Customer.idCustomer = "+idCustomer;

    connection.query(updCustomerQuery,
        function (error, results, fields){
            if(error){
                console.log("Hubo un error al activar el cliente: "+idCustomer, error.message);
                return res.status(404).send("Hubo un error en la consulta activateCustomer");
            }
            res.json(results);
        }
    );
}

module.exports = {
    allCustomers : allCustomers,
    getCustomerById : getCustomerById,
    insCustomer : insCustomer,
    updCustomer : updCustomer,
    deactivateCustomer : deactivateCustomer,
    activateCustomer : activateCustomer
}