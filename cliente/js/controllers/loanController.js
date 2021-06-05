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
    $('#content2').text("");
    createActionSection(customerId);
    loanModel.getLoansFromUserId(customerId);
  }
}

/**
 * Crea el contenido de la sección de acción
 * @param {number} customerId 
 */
function createActionSection(customerId) {
  $('#actionSection2').text("");
  $('#actionSection2').append('<h3 class="center">Contratos</h3>');
  buttonsUtilities.createAddLoanButton(customerId);
}