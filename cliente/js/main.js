/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  startApp();

  $('.customerBtn').click(function(){
    loadCustomerList();
  });
  
  $('.loansBtn').click(function(){
    $('#actionSection').text("");
    $('#content').text("");
    $('#content').append("Lista de prestamos aquí");
  });
});



$('.button-collapse').sideNav();

function loadCustomerList(){
  var customerController = new CustomerController();
  customerController.getActiveCustomers();
  displayAddCustomerButton();
}

function displayAddCustomerButton(){
  $('#actionSection').text("");
  var addCustomerButton = 
  '<a class="right linkOpt modal-trigger" href="#modalCrCustomer">\n'+
    '<i class="material-icons left iconOpt">person_add</i>\n'+
    'Agregar\n'+
  '</a>\n';
  $('#actionSection').append(addCustomerButton);
}

function startApp(){
  // Inicialize menu
  var navbarUtilities = new NavbarUtilities();
  navbarUtilities.createNavBar();

  // Start load customer list
  loadCustomerList();
  //inicialice the modals
  $('.modal').modal();
}

