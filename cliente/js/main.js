/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  loadCustomerList();
});

function loadCustomerList(){
  var customerController = new CustomerController();
  customerController.getActiveCustomers();
}

