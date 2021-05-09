const loanModel = new LoanModel();

function LoanController(){
  //get list active loans
  this.getActiveLoans = function(){
    $('#actionSection').text("");
    $('#content').text("");
    $('#content').append("Lista de prestamos aquí");
    navbarUtilities.reestablishBootomBar();
  }

  // get list of loans by userId
  this.getLoansFromUserId = function(customerId) {
    loanModel.getLoansFromUserId(customerId);
  }
}