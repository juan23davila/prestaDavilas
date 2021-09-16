function PaymentController(){
  
  this.getPaymentsFromLoanId = function(loanId){
    $('#content2').text("");
    creatPaymentsActions(loanId);
  }
}

/**
 * Crea el contenido de la sección de acción
 * @param {number} loanId 
 */
 function creatPaymentsActions(loanId) {
  $('#actionSection2').text("");
  $('#actionSection2').append('<h3 class="center">Pagos</h3>');
  buttonsUtilities.createAddPaymentButton(loanId);
}