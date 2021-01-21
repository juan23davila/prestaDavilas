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

  this.createEditRemoveCustomerButton = function() {
    $('#actionSection').text("");
    var addCustomerButton = 
    '<a class="right linkOpt" id="upCustomerBtn">\n'+
      '<i class="fas fa-user-edit fa-lg"></i>\n'+
      'Actualizar\n'+
    '</a>\n'+
    '<a class="right linkOpt" id="reCustomerBtn">\n'+
      '<i class="fas fa-user-times fa-lg"></i>\n'+
      'Eliminar\n'+
    '</a>\n';
    $('#actionSection').append(addCustomerButton);

    $('#upCustomerBtn').click(function(){
      /**$('#modalGeneralContent').text("");
      $('#modalGeneralContent').append(modalContentUtilities.crUpdCustomerForm());
      
      // Se crea la opcion de submit del formulario
      $('#crearClienteForm').submit(function(event){
        event.preventDefault();
        let userNewData = $('#crearClienteForm').serializeArray();
        customerController.setNewCustomer(userNewData);
      });*/
      alert("Ya haré algo");
    });
  }
}