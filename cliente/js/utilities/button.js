let modalContentUtilities = new ModalContentUtilities();
var buttonsUtilities = new ButtonsUtilities();

function ButtonsUtilities() {
  this.createAddCustomerButton = function(){
    $('#actionSection').text("");
    var addCustomerButton = 
    '<a class="right linkOpt modal-trigger" href="#modalFormGeneral" id="crCustomerBtn">\n'+
      '<i class="material-icons left iconOpt">person_add</i>\n'+
      'Agregar\n'+
    '</a>\n';
    $('#actionSection').append(addCustomerButton);

    $('#crCustomerBtn').click(function(){
      $('#modalGeneralContent').text("");
      $('#modalGeneralContent').append(modalContentUtilities.crCustomerForm());
      
      // Se crea la opcion de submit del formulario de crear
      $('#crearClienteForm').submit(function(event){
        event.preventDefault();
        let userNewData = $('#crearClienteForm').serializeArray();
        customerController.setNewCustomer(userNewData);
      });
    });
  }

  this.createEditRemoveCustomerButton = function(infoUsuario) {
    $('#actionSection').text("");
    var addCustomerButton = 
    '<a class="right linkOpt modal-trigger" id="upCustomerBtn" href="#modalFormGeneral">\n'+
      '<i class="fas fa-user-edit fa-lg"></i>\n'+
      'Actualizar\n'+
    '</a>\n'+
    '<a class="right linkOpt" id="rmCustomerBtn">\n'+
      '<i class="fas fa-user-times fa-lg"></i>\n'+
      'Eliminar\n'+
    '</a>\n';
    $('#actionSection').append(addCustomerButton);

    // Click action to update
    $('#upCustomerBtn').click(function(){
      $('#modalGeneralContent').text("");
      $('#modalGeneralContent').append(modalContentUtilities.updCustomerForm(infoUsuario));
      // Se crea la opcion de submit del formulario de actualizar
      $('#actualizarClienteForm').submit(function(event){
        event.preventDefault();
        let customerToUpdData = $('#actualizarClienteForm').serializeArray();
        customerController.updCustomer(customerToUpdData);
      });
    });

    // Click action to remove
    $('#rmCustomerBtn').click(function(){
      customerController.rmCustomer(infoUsuario[0]['idCustomer']);
    });
  }

  this.createAddLoanButton = function (customerId) {
    var addCustomerButton = 
    '<a class="right linkOpt modal-trigger" id="crLoanBtn" href="#modalFormGeneral">\n'+
      '<i class="material-icons left">account_balance</i>\n'+
      'Crear nuevo contrato\n'+
    '</a>';
    $('#actionSection2').append(addCustomerButton);

    // Accion adicionar prestamos
    $('#crLoanBtn').click(function(){
      $('#modalGeneralContent').text("");
      $('#modalGeneralContent').append(modalContentUtilities.crLoanForm());
      
      // Se crea la opcion de submit del formulario de crear
      $('#crearClienteForm').submit(function(event){
        event.preventDefault();
        let userNewData = $('#crearClienteForm').serializeArray();
        customerController.setNewCustomer(userNewData);
      });
    });
  }
}