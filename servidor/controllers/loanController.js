var connection = require('../lib/connectionBD');

/**
 * Obtiene los préstamos de un cliente
 * @param {*} req 
 * @param {*} res 
 */
function getLoansByCustomerId(req, res) {
    var idCustomer = req.params.idCustomer; // id Customer

    var loansByCustomerQuery = 
                               "SELECT idLoan, \n"+
                               "       address, \n"+
                               "       valueNow, \n"+
                               "       UNIX_TIMESTAMP(payUntil) payUntil, \n"+
                               "       percentage, \n"+
                               "       TIMESTAMPDIFF(DAY, Loan.payUntil, CURDATE())+1 AS days_elapsed \n"+
                               "FROM Loan LEFT JOIN Mortage_data \n"+
                               "ON Loan.idLoan = Mortage_data.Loan_idLoan \n"+
                               "WHERE Loan.custId = "+idCustomer;

    connection.query(loansByCustomerQuery,
        function (error, results){
            if(error){
                return res.status(500).json("Error al obtener los los présamos de un cliente: "+error);
            }
            if(results.length == 0){
                return res.status(404).json("El cliente no tiene contratos vigentes.");
            }
            res.json(results);
        }
    );
}


function insLoan(req, res) {
    var newLoan = req.body;

    if(!newLoan.custId){
        return res.status(422).json('El campo "Identificador del cliente" debe contener un valor.');
    }
    if(!newLoan.valueIni){
        return res.status(422).json('El campo "Valor" no puede estar vacio.');
    }
    if(isNaN(newLoan.valueIni)){
        return res.status(422).json('El campo "Valor" debe ser numérico: '+newLoan.valueIni);
    }
    if(!newLoan.address){
        return res.status(422).json('El campo "Dirección" no puede estar vacio.');
    }
    if(!newLoan.mortage_number){
        return res.status(422).json('El campo "Número hipoteca" no puede estar vacio.');
    }
    if(!newLoan.notary){
        return res.status(422).json('El campo "Notaría" no puede estar vacio.');
    }
    if(!newLoan.percentage){
        return res.status(422).json('El campo "Porcentaje" no puede estar vacio.');
    }
    if(!newLoan.date){
        return res.status(422).json('El campo "Fecha" no puede estar vacio.');
    }
    
  
    let custId = "'"+newLoan.custId+"'";
    let valueIni = "'"+newLoan.valueIni+"'";
    let address = "'"+newLoan.address+"'";
    let mortage_number = "'"+newLoan.mortage_number+"'";
    let notary = "'"+newLoan.notary+"'";
    let percentage = "'"+newLoan.percentage+"'";
    let date = "'"+newLoan.date+"'";
    let comments = newLoan.comments ?  "'"+newLoan.comments+"'" : null;

    var insLoanQuery = "INSERT INTO Loan(\n"+
                            "custId,\n"+ 
                            "valueIni,\n"+ 
                            "valueNow,\n"+ 
                            "payUntil,\n"+ 
                            "idLoanType,\n"+ 
                            "prePayment,\n"+ 
                            "date,\n"+ 
                            "percentage)\n"+
                        "VALUES (\n"+
                            custId+",\n"+
                            valueIni+",\n"+
                            valueIni+",\n"+
                            date+",\n"+
                            "'"+1+"',\n"+
                            "'Y',\n"+
                            date+",\n"+
                            percentage+")";

    
                                
    connection.query(insLoanQuery, function(error, result, fields){
        if(error){
            console.log("Hubo un error al insertar prestamo nuevo", error.message);
            return res.status(500).send("Hubo un error en la consulta insLoan_Loan: "+error);
        }
        
        var insMortageInfoQuery = "INSERT INTO Mortage_data(\n"+
                                    "address,\n"+
                                    "mortage_number,\n"+  
                                    "notary,\n"+  
                                    "mortage_type,\n"+
                                    "comments,\n"+  
                                    "Loan_idLoan)\n"+  
                                  "VALUES (\n"+
                                    address+",\n"+
                                    mortage_number+",\n"+
                                    notary+",\n"+
                                    "1,\n"+
                                    comments+",\n"+
                                    result.insertId+")";


        connection.query(insMortageInfoQuery, function(error2, result2, fields2){
            if(error2){
                console.log("Hubo un error al insertar info de la hipoteca", error.message);
                return res.status(500).send("Hubo un error en la consulta insLoan_mortageDate: "+error);
            }

            res.json(result);
        });

    });
}


/**
 * add n months to exired date
 */
function addMonthsPayUntil(idLoan, nMonths){
    var addMonthsExpDateQuery = "UPDATE Loan set payUntil = payUntil + INTERVAL "+nMonths+" MONTH WHERE idLoan = "+idLoan;
}


module.exports = {
    getLoansByCustomerId : getLoansByCustomerId,
    insLoan : insLoan
}