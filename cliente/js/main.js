const customerController = new CustomerController();

/**
 * Funcion que se ejecuta al iniciar la página
 */
$(document).ready(function(){
  const inCod = prompt("Por favor indique el código de seguridad");
  if(inCod == "zjf8zs"){
    startApp();
  }else{
    alert("Error al ingresar.");
  }
  

  $('.customerBtn').click(function(){
    resetMainView();
    customerController.getActiveCustomers();
  });
  
  $('.loansBtn').click(function(){
    resetMainView();
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


function resetMainView() {
  $('#content2').text("");
  $('#content').text("");
  $('#actionSection').text("");
  $('#actionSection2').text("");
}
