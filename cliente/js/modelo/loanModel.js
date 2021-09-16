//ip and port of the backedServer
//var server = 'http://0.0.0.0:8080/';
var server = 'https://server.prestadavilas.com/'
let loanData = null;
var buttonsUtilities = new ButtonsUtilities();

function LoanModel()
{
    this.getLoansFromUserId = function(customerId){
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
                        tableUtilities.createEventClickLoan(idTable);
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


    this.postLoanFromUser = function(loanToSave) {
        new Promise(resolve => {
            $.post({
                url : server+"loan",
                data: loanToSave,
                success : function(res){
                            alert("Se ingresó préstamo");
                        },
                error : function(response, status, xhr){
                            if(response.status == 422){
                                alert("Falló el registro del préstamo: "+response.responseText);
                            }
                            else{
                                alert("falló ingresando el prestamo. Estado:"+status+", mensaje: "+response.message);
                            }
                        },
                dataType : 'json'
            });
            setTimeout(()=> {
                resolve('resolved');
            }, 1500);
        });
    }


    this.getLoanById = function (idLoan) {
        return new Promise(resolve => {
            $.getJSON(server+"loan/"+idLoan, function(data){
                $('#content').text("");
                let infoLoan = "<br>";
                infoLoan += '<div class="UserInfo">\n';
                infoLoan += '   <div class="row">\n';
                infoLoan += '       <div class="col s4 m4">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="valueNowSpan">Capital</label><span id=valueNowSpan>'+formatToMoney(data[0]['valueNow'])+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s4 m4">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="payUntilSpan">Pago hasta</label><span id=payUntilSpan>'+processDate(data[0]['payUntil'])+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s4 m2">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="percentageSpan">Porcentaje</label><span id=percentageSpan>'+data[0]['percentage']+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s4 m2">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="mortage_numberSpan">Número hipoteca</label><span id=mortage_numberSpan>'+data[0]['mortage_number']+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s4 m4">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="addressSpan">Dirección</label><span id=addressSpan>'+data[0]['address']+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s4 m2">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="notarySpan">Notaría</label><span id=notarySpan>'+data[0]['notary']+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '       <div class="col s12 m6 l6">\n';
                infoLoan += '           <div class="box">\n';
                infoLoan += '               <label for="commentsSpan">Comentarios</label><span id=commentsSpan>'+data[0]['comments']+'</span>\n';
                infoLoan += '           </div>\n';
                infoLoan += '       </div>\n';
                infoLoan += '   </div>\n';
                infoLoan += '</div>\n';
                $('#content').append(infoLoan);
                buttonsUtilities.createEditRemoveCustomerButton(data);
            });
            setTimeout(()=> {
                resolve('resolved');
            }, 500);
        });
        
    }
}