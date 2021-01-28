//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';
let userData = null;
var buttonsUtilities = new ButtonsUtilities();

function ModeloCliente()
{
    this.getCustomers = function(){
        $.getJSON(server+"customers/", function(data){
            let clientes = data['clientes'];
            let tableHeader = ["Cédula", "Nombre", "Apellido", "Celular"];
            let attrs = ["numIdent", "custName", "custLastName", "cellPhone"];
            let idTable = 'customerList';
            let nameTR = 'idCustomer';
            var tableUtilities = new TableUtilities();
            $('#content').text("");
            var contentTable = tableUtilities.createTable(tableHeader,attrs,clientes, idTable, nameTR);
            $('#content').append(contentTable);
            tableUtilities.createEventClick(idTable);
        });
    }
    
    this.postCustomer = function(customerToSave) {
        $.post({
            url : server+"customer",
            data: customerToSave,
            success : function(res){
                        alert("Se insertó correctamente el usuario");
                      },
            error : function(response, status, xhr){
                        if(response.status == 422){
                            alert("Falló la inserción del usuario: "+response.responseText);
                        }
                        else{
                            alert("falló insertando el usuario con status:"+status+", mensaje: "+response.message);
                        }
                    },
            dataType : 'json'
        });
    }


    this.putCustomer = function(customerToSave, idCustomer) {
        $.ajax({
            url : server+"customer/"+idCustomer,
            type : 'PUT',
            data: customerToSave,
            success : function(res){
                        alert("Se actulizó correctamente el usuario");
                      },
            error : function(response, status, xhr){
                        if(response.status == 422){
                            alert("Falló la actualizacion del usuario: "+response.responseText);
                        }
                        else{
                            alert("falló actualizando el usuario con status:"+status+", mensaje: "+response.message);
                        }
                    },
            dataType : 'json'
        });
    }

    this.getCustomer = function (idCustomer) {
        return new Promise(resolve => {
            $.getJSON(server+"customer/"+idCustomer, function(data){
                $('#content').text("");
                let infoCustomer = "";
                infoCustomer += '<div class="UserInfo">\n';
                infoCustomer += '   <div class="row">\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="numIdentSpan">Cedula</label><span id=numIdentSpan>'+data[0]['numIdent']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="custNameSpan">Nombre</label><span id=custNameSpan>'+data[0]['custName']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="custLastNameSpan">Apellido</label><span id=custLastNameSpan>'+data[0]['custLastName']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="cellPhoneSpan">Celular</label><span id=cellPhoneSpan>'+data[0]['cellPhone']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="phoneSpan">Teléfono 1</label><span id=phoneSpan>'+data[0]['phone']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="phoneTwoSpan">Teléfono 2</label><span id=phoneTwoSpan>'+data[0]['phoneTwo']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s12 m8 l8">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="addressSpan">Dirección</label><span id=addressSpan>'+data[0]['address']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '       <div class="col s12 m4 l4">\n';
                infoCustomer += '           <div class="box">\n';
                infoCustomer += '               <label for="emailSpan">Email</label><span id=emailSpan>'+data[0]['email']+'</span>\n';
                infoCustomer += '           </div>\n';
                infoCustomer += '       </div>\n';
                infoCustomer += '   </div>\n';
                infoCustomer += '</div>\n';
                $('#content').append(infoCustomer);
                buttonsUtilities.createEditRemoveCustomerButton(data);
            });
            setTimeout(()=> {
                resolve('resolved');
            }, 500);
        });
        
    }

    this.getLoansFromUserId = function(){
        $('#content').append('<h3 class="center">Contratos</h3>');
    }
}