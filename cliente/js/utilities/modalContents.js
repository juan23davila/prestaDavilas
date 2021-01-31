function ModalContentUtilities() 
{
  this.crCustomerForm = function(){
    let content = ''
    content += '<h4>Agrega Cliente</h4>\n';
    content += '<br>\n';
    content += '  <form id="crearClienteForm">\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">#</i>\n';
    content += '      <input type="number" name="numIdent" class="validate">\n';
    content += '      <label for="numIdent" data-error="Solo se permite números">Número de Cédula</label>\n';
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">person</i>\n';
    content += '      <input type="text" name="custName">\n';
    content += '      <label for="name">Nombre</label>\n';
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">person_outline</i>\n';
    content += '      <input type="text" name="custLastName">\n';
    content += '      <label for="custLastName">Apellido</label>\n';
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone_android</i>\n';
    content += '      <input type="tel" name="cellPhone" class="validate">\n';
    content += '      <label for="cellPhone">Celular</label>\n';
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone</i>\n';
    content += '      <input type="tel" name="phone" class="validate">\n';
    content += '      <label for="phone">Teléfono</label>\n';
    content += '    </div>\n';
    content += '    <div class="input-field inline">\n';
    content += '      <i class="material-icons prefix">phone</i>\n';
    content += '      <input type="tel" name="phone2" class="validate">\n';
    content += '      <label for="phoneTwo">Teléfono 2</label>\n';
    content += '    </div>\n';
    content += '    <br>\n';
    content += '    <div class="input-field">\n';
    content += '      <i class="material-icons prefix">directions</i>\n';
    content += '      <input type="text" name="address">\n';
    content += '      <label for="address">Dirección de Residencia</label>\n';
    content += '    </div>\n';
        
    content += '    <div class="input-field">\n';
    content += '      <i class="material-icons prefix">email</i>\n';
    content += '      <input type="email" name="email" class="validate">\n';
    content += '      <label data-error="Formato incorrecto" for="email">Email</label>\n';
    content += '    </div>\n';
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
}