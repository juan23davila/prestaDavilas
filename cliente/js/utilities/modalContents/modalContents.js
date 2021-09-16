function ModalContentUtilities() 
{
  this.crCustomerForm = function(){
    let content = ''
    content += '<h4>Agrega Cliente</h4>\n';
    content += '<br>\n';
    content += '  <form id="crearClienteForm">\n';
    // Cédula
    content += createField(1,'#', 'number', 'Número de Cédula', 'numIdent')+'<br>\n';
    // Nombre
    content += createField(1, 'person', 'text', 'Nombre', 'custName');
    // Apellido
    content += createField(1, 'person_outline', 'text', 'Apellido', 'custLastName')+'<br>\n';
    // Celular
    content += createFieldWithFormaterror(1, 'phone_android', 'tel', 'Celular', 'cellPhone', 'validate', 'No es un formato válido de teléfono');
    // Teléfono 1
    content += createFieldWithFormaterror(1, 'phone', 'tel', 'Teléfono', 'phone', 'validate', 'No es un formato válido de teléfono');
    // Teléfono 1
    content += createFieldWithFormaterror(1, 'phone', 'tel', 'Teléfono 2', 'phone2', 'validate', 'No es un formato válido de teléfono')+'<br>\n';
    // Address
    content += createTextArea(1, 'directions', 'text', 'Dirección de Residencia', 'address');
    // Email
    content += createTextAreaWithFormaterror(1,'email','email','Email','email', 'validate', 'Formato incorrecto');
    content += '    <div class="modal-footer">\n';
    content += '      <input type="submit" value="Agregar" class="modal-close waves-effect waves-light btn-flat">\n';
    content += '    </div>\n';
    content += '  </form>\n';

    return content;
  }

  this.updCustomerForm = function(infoUsuario){
    let content = ''
    content += '<h4>Actualizar Información del Cliente</h4>\n';
    content += '<br>\n';
    content += '  <form id="actualizarClienteForm">\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">#</i>\n';
    content += '      <input type="number" name="numIdent" class="validate" value="'+infoUsuario[0]['numIdent']+'">\n';
    content += '      <label for="numIdent" data-error="Solo se permite números" class="active">Número de Cédula</label>\n';
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">person</i>\n';
    content += '      <input type="text" name="custName" value="'+infoUsuario[0]['custName']+'">\n';
    content += '      <label for="name" class="active">Nombre</label>\n';
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">person_outline</i>\n';
    content += '      <input type="text" name="custLastName" value="'+infoUsuario[0]['custLastName']+'">\n';
    content += '      <label for="custLastName" class="active">Apellido</label>\n';
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone_android</i>\n';
    if(infoUsuario[0]['cellPhone'] != null){
      content += '      <input type="tel" name="cellPhone" class="validate" value="'+infoUsuario[0]['cellPhone']+'">\n';
      content += '      <label for="cellPhone" class="active">Celular</label>\n';
    }else{
      content += '      <input type="tel" name="cellPhone" class="validate">\n';
      content += '      <label for="cellPhone">Celular</label>\n';
    }
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone</i>\n';
    if(infoUsuario[0]['phone'] != null){
      content += '      <input type="tel" name="phone" class="validate" value="'+infoUsuario[0]['phone']+'">\n';
      content += '      <label for="phone" class="active">Teléfono</label>\n';
    }else{
      content += '      <input type="tel" name="phone" class="validate">\n';
      content += '      <label for="phone">Teléfono</label>\n';
    }
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone</i>\n';
    if(infoUsuario[0]['phone2'] != null){
      content += '      <input type="tel" name="phone2" class="validate" value="'+infoUsuario[0]['phone2']+'">\n';
      content += '      <label for="phone2" class="active">Teléfono 2</label>\n';
    }else{
      content += '      <input type="tel" name="phone2" class="validate">\n';
      content += '      <label for="phone2">Teléfono 2</label>\n';
    }
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field">\n';
    content += '      <i class="material-icons prefix">directions</i>\n';
    if(infoUsuario[0]['address'] != null){
      content += '      <input type="text" name="address" class="validate" value="'+infoUsuario[0]['address']+'">\n';
      content += '      <label for="address" class="active">Dirección de Residencia</label>\n';
    }else{
      content += '      <input type="text" name="address" class="validate">\n';
      content += '      <label for="address">Dirección de Residencia</label>\n';
    }
    content += '    </div>\n';
    content += '    <div class="input-field">\n';
    content += '      <i class="material-icons prefix">email</i>\n';
    if(infoUsuario[0]['email'] != null){
      content += '      <input type="email" name="email" class="validate" value="'+infoUsuario[0]['email']+'">\n';
      content += '      <label for="email" class="active">Email</label>\n';
    }else{
      content += '      <input type="email" name="email" class="validate">\n';
      content += '      <label for="email">Email</label>\n';
    }
    content += '    </div>\n';
    content += '    <div class="modal-footer">\n';
    content += '      <input type="submit" value="Actualizar" class="modal-close waves-effect waves-light btn-flat">\n';
    content += '    </div>\n';
    content += '  </form>\n';

    return content;
  }

  this.crLoanForm = function() {
    let content = ''
    content += '<h4>Agrega Contrato</h4>\n';
    content += '<br>\n';
    content += '  <form id="createLoanForm">\n';
    // Fecha
    content += createFieldWithClass(1, 'calendar_today', 'text', 'Fecha', 'date', 'datepicker');
    // Valor
    content += createFieldFormating(1, 'attach_money', 'text', 'Valor', 'amount', 'currency');
    // Porcenaje
    content += createFieldFormating(2, 'fas fa-percentage', 'text', 'Porcentaje', 'percentage', 'percentage');
    // Dirección
    content += createTextArea(1, 'directions', 'text', 'Dirección', 'address');
    // Número hipoteca
    content += createField(2, 'fab fa-slack-hash', 'text', 'Número hipoteca', 'mortgageNumber');
    // Notaría
    content += createField(1, 'gavel', 'text', 'Notaría', 'notary');
    // Comentario
    content += createTextArea(2, 'far fa-comment', 'text', 'Comentario', 'comment');
    // submitButton
    content += '    <div class="modal-footer">\n';
    content += '      <input type="submit" value="Agregar" class="modal-close waves-effect waves-light btn-flat">\n';
    content += '    </div>\n';
    content += '  </form>\n';

    return content;
  }

  this.crPaymentForm = function () {
    let content = ''
    content += '<h4>Agrega Pago</h4>\n';
    content += '<br>\n';
    // submitButton
    content += '    <div class="modal-footer">\n';
    content += '      <input type="submit" value="Agregar" class="modal-close waves-effect waves-light btn-flat">\n';
    content += '    </div>\n';
    content += '  </form>\n';

    return content;
  }
}