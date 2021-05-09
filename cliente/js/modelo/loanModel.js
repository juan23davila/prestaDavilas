//ip and port of the backedServer
var server = 'http://0.0.0.0:8080/';
let loanData = null;
var buttonsUtilities = new ButtonsUtilities();

function LoanModel()
{
    this.getLoansFromUserId = function(customerId){
        $('#content2').text("");
        $('#actionSection2').text("");
        $('#actionSection2').append('<h3 class="center">Contratos</h3>');

        $.get({
            url : server+"loansbycustomer/"+customerId,
            success : function(data){
                        var tableUtilities = new TableUtilities();
                        let tableHeader = ["Dirección","Saldo","%", "Pago hasta", "Tiempo que debe", "Intereses"];
                        let attrs = [["address","s"], ["valueNow", "$a"], ["percentage","%a"], ["payUntil","d"], ["days_elapsed","t"], ["xxx","li"]];
                        let idTable = 'loanList';
                        let nameTR = 'idLoan';
                        var contentTable = tableUtilities.createTable(tableHeader,attrs,data, idTable, nameTR);
                        $('#content2').append(contentTable);
                        tableUtilities.createEventClick(idTable);
                    },
            error : function(response, status, xhr){
                        if(response.status == 404){
                            let errorMessaje = '';
                            errorMessaje += '<h5 class="center-align blue-grey-text">\n'
                            errorMessaje += response.responseText.replaceAll('"', '')+'\n';
                            errorMessaje += '</h5>';
                            $('#content2').append(errorMessaje);
                        }
                        else{
                            alert("Falló al obtener los prestamos del usuario con status:"+status+", mensaje: "+response.message);
                        }
                    }
        });
    }
}