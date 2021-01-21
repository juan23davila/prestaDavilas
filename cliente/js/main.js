var customerController = new CustomerController();
/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  startApp();

  $('.button-collapse').sideNav();

  $('.customerBtn').click(function(){
    loadCustomerList();
  });
  
  $('.loansBtn').click(function(){
    $('#actionSection').text("");
    $('#content').text("");
    $('#content').append("Lista de prestamos aquí");
  });


  //inicialice the modals
  $('.modal').modal();
  // Para que se muestre las raya inferior del NAVBAR
  $('.tabs').tabs();
});

function loadCustomerList(){
  customerController.getActiveCustomers();
}

function startApp(){
  
  // Inicialize menu
  var navbarUtilities = new NavbarUtilities();
  navbarUtilities.createNavBar();

  // Start load customer list
  loadCustomerList();
}

