/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  loadCustomerList();
});

$('.customerBtn').click(function(){
  loadCustomerList();
});

$('.loansBtn').click(function(){
  $('#actionSection').text("");
  $('#content').text("");
  $('#content').append("Lista de prestamos aquí");
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
  '<a id="addCustomer" class="right linkOpt">\n'+
    '<i class="material-icons left iconOpt">add</i>\n'+
    'Agregar\n'+
  '</a>\n';
  $('#actionSection').append(addCustomerButton);

  $('#addCustomer').click(function(){
    alert("Se desplegará formulario para agregar cliente");
  });
}

