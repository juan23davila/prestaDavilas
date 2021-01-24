let customerController = new CustomerController();
let loanController = new LoanController();

/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  startApp();

  $('.button-collapse').sideNav();

  $('#customerBtn').click(function(){
    customerController.getActiveCustomers();
  });
  
  $('#loansBtn').click(function(){
    loanController.getActiveLoans();
  });


  //inicialice the modals
  $('.modal').modal();
  // Para que se muestre las raya inferior del NAVBAR
  $('.tabs').tabs();
});

function startApp(){
  
  // Inicialize menu
  var navbarUtilities = new NavbarUtilities();
  navbarUtilities.createNavBar();
  customerController.getActiveCustomers();
}
