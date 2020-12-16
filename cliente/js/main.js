/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  loadCustomerList();
});

function loadCustomerList(){
  var customerController = new CustomerController();
  customerController.getActiveCustomers();
  displayAddCustomerButton();
}

function displayAddCustomerButton(){
  $('#actionSection').append("");
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

