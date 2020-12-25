//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/'

function CustomerController(){

    //get list active customers
    this.getActiveCustomers = function(){
        $.getJSON(server+"customers/", function(data){
            var clientes = data['clientes'];
            var tableHeader = ["Cédula", "Nombre", "Apellido", "Teléfono"];
            var attrs = ["numIdent", "custName", "custLastName", "cellPhone"];
            var tableUtilities = new TableUtilities();
            $('#content').text("");
            var contentTable = tableUtilities.createTable(tableHeader,attrs,clientes);
            $('#content').append(contentTable);
        });
    }
}