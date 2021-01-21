//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';

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

    this.getCustomer = function (idCustomer) {
        $.getJSON(server+"customer/"+idCustomer, function(data){
            $('#content').text("");
            $('#content').append('<label>Nombre</label><p>'+data[0]['custName']+'</p>');
            $('#content').append(JSON.stringify(data));
        });
    }
}