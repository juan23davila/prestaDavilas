var nombres_dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado")
var nombres_meses = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic");
let iniDate;
let qMonths; // Cantidad de meses
let qDays; // Cantidad de dias
let amountLoan; // Valor del prestamo
let percentajeLoan; // Porcentaje 


function TableUtilities(){

  /**
   * Create Table
   * @param {header of the table} header 
   * @param {name of column in database} attrs 
   * @param {data of database} data 
   */
  this.createTable = function(header, attrs, data, idTable, nameTR){
    var contentTable = "";

    contentTable += '   <table class="striped" aria-label="Dessert calories" id="'+idTable+'">\n';
    contentTable += '     <thead>\n';
    contentTable += '       <tr class="mdc-data-table__header-row">\n';
    contentTable +=           this.createTableHeader(header);
    contentTable += '       </tr>\n';
    contentTable += '     </thead>\n';
    contentTable += '     <tbody class="mdc-data-table__content"></tbody>\n';
    contentTable +=         this.createTableContent(attrs, data, nameTR);
    contentTable += '     </tbody>\n';
    contentTable += '   </div>\n';

    return contentTable;
  }

  this.createTableHeader = function(header){
    var contentHeader = "";
    var suh = "        "; //Space until here

    for (let index = 0; index < header.length; index++) {
      contentHeader += suh + '<th class="mdc-data-table__header-cell" role="columnheader" scope="col">'+header[index]+'</th>\n';
    }

    return contentHeader;
  }

  this.createTableContent = function(attrs, data, nameTR){
    var content = "";
    var suh = "       "; //Space until here
    for (let i = 0; i < data.length; i++) {
      content += suh+'<tr class="mdc-data-table__row rowTable" name="'+data[i][nameTR]+'">\n';
      for (let j = 0; j < attrs.length; j++) {
        dataFormated = this.setFormatData(data[i][attrs[j][0]], attrs[j][1]);
        content += suh+'  <td class="mdc-data-table__cell">'+dataFormated+'</td>\n';
      }
      content += suh+'</tr>\n';
    }
    return content;
  }

  this.createEventClickCutomer = function(idTable) {
    let customerController = new CustomerController;
    $('#'+idTable+' tr').click(function(){
      let idUser = $(this).attr('name');
      customerController.getCustomer(idUser);
    });
  }

  /**
   * Obtiene información del préstamo
   * @param {number} idTable 
   */
  this.createEventClickLoan = function(idTable) {
    let loanController = new LoanController;
    $('#'+idTable+' tr').click(function(){
      let idLoan = $(this).attr('name');
      loanController.getLoan(idLoan);
    });
  }


  this.setFormatData = function(data, format) {
    switch (format) {
      case "s": // string, no format
        return data
      case "d": // date
        return processDate(data);
      case "t": // time
        let timeDetail = getMonthsDaysBetweenDates(parseInt(data), iniDate);
        qMonths = timeDetail[1];
        qDays = timeDetail[2];
        return timeDetail[0];
      case "li": // loan interest
        let amount = calculateInterest();
        return formatToMoney(amount);
      case "$a":
        amountLoan = data;
        return formatToMoney(data);
      case "%a":
        percentajeLoan = data;
        return data;
      default:
        return data;
    }
  }
}

/**
 * Calcula lo que se le debe de intereses a un prestamo en particular
 * @returns {number} valor que representa dinero que cuenta los intereses
 */
function calculateInterest(){
  let monthCost = amountLoan * percentajeLoan / 100;
  if(qDays > 0){
    monthCost *= qMonths + 1;
  }else{
    monthCost *= qMonths;
  }
  return monthCost;
}