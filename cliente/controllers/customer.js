//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/'

function CustomerController(){

    //get list active customers
    this.getActiveCustomers = function(){
        /**var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var clientes = JSON.parse(xhttp.responseText)['clientes'];
                var tableHeader = ["Cédula", "Nombre", "Apellido", "Teléfono"];
                var attrs = ["numIdent", "custName", "custLastName", "cellPhone"];
                var tableUtilities = new TableUtilities();
                var contentTable = tableUtilities.createTable(tableHeader, attrs, clientes);
                $('#content').append(contentTable);
            }
        }

        xhttp.open("GET", server+"customers/");
        xhttp.send(); */

        $.getJSON(server+"customers/", function(data){
            var clientes = data['clientes'];
            var tableHeader = ["Cédula", "Nombre", "Apellido", "Teléfono"];
            var attrs = ["numIdent", "custName", "custLastName", "cellPhone"];
            var tableUtilities = new TableUtilities();
            var contentTable = tableUtilities.createTable(tableHeader,attrs,clientes);
            $('#content').append(contentTable);
        });
    }
}