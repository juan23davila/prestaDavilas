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

      $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: true,
        today: 'Fecha de hoy',
        clear: 'Borrar',
        format: 'dd/mmm/yyyy',
        setDefaultDate: true,
        defaultDate: new Date(),
        monthsFull: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
				monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
				weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ],
				weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab' ]
      });

      $('.datepicker').on('mousedown', function(event) {
        event.preventDefault();
      });


      // Jquery Dependency
      $("input[data-type='currency']").on({
        keyup: function() {
          formatCurrency($(this));
        },
        blur: function() { 
          formatCurrency($(this), "blur");
        }
      });

      // Percentage validator
      $("input[data-type='percentage']").on({
        keyup: function() {
          formatPercentage($(this));
        },
        blur: function() { 
          formatPercentage($(this), "blur");
        }
      });

      
      // Se crea la opcion de submit del formulario de crear
      $('#createLoanForm').submit(function(event){
        event.preventDefault();
        let loanNewData = $('#createLoanForm').serializeArray();
        console.log(loanNewData);
        //customerController.setNewCustomer(userNewData);
      });
    });
  }
}