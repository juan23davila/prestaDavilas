var customerController = new CustomerController();
var buttonsUtilities = new ButtonsUtilities();
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
  $('.tabs').tabs();
});

function loadCustomerList(){
  customerController.getActiveCustomers();
  buttonsUtilities.createAddCustomerButton();
}

function startApp(){
  
  // Inicialize menu
  var navbarUtilities = new NavbarUtilities();
  navbarUtilities.createNavBar();

  // Start load customer list
  loadCustomerList();
}

