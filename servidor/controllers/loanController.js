var connection = require('../lib/connectionBD');
/**
 * 
 */
function getLoansByCustomerId(req, res) {
    var idCustomer = req.params.idCustomer; // id Customer

    var loansByCustomerQuery = 
                               "SELECT address, \n"+
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


/**
 * add n months to exired date
 */
function addMonthsExpireDate(req, res){
    var addMonthsExpDateQuery = "UPDATE Loan set expDate = expDate + INTERVAL "+nMonths+" MONTH WHERE idLoan = "+idLoan;
}


module.exports = {
    getLoansByCustomerId : getLoansByCustomerId
}