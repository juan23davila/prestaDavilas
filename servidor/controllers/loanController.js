/**
 * add months to exired date
 */
function addMonthsExpireDate(req, res){
    var addMonthsExpDateQuery = "UPDATE Loan set expDate = expDate + INTERVAL "+nMonths+" MONTH WHERE idLoan = "+idLoan;
}