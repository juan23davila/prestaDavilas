function LoanController(){
  //get list active customers
  this.getActiveLoans = function(){
    $('#actionSection').text("");
    $('#content').text("");
    $('#content').append("Lista de prestamos aquí");
    navbarUtilities.reestablishBootomBar();
  }
}