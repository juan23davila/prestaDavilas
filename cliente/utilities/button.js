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
      $('#modalGeneralContent').append(modalContentUtilities.crUpdCustomerForm());
      
      // Se crea la opcion de submit del formulario
      $('#crearClienteForm').submit(function(event){
        event.preventDefault();
        let userNewData = $('#crearClienteForm').serializeArray();
        customerController.setNewCustomer(userNewData);
      });
      
    });
  }
}