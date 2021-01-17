//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';

function ModeloCliente()
{
    this.getCustomers = function(){
        $.getJSON(server+"customers/", function(data){
            var clientes = data['clientes'];
            var tableHeader = ["Cédula", "Nombre", "Apellido", "Celular"];
            var attrs = ["numIdent", "custName", "custLastName", "cellPhone"];
            var tableUtilities = new TableUtilities();
            $('#content').text("");
            var contentTable = tableUtilities.createTable(tableHeader,attrs,clientes);
            $('#content').append(contentTable);
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
}