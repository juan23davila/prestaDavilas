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
        content += suh+'  <td class="mdc-data-table__cell">'+data[i][attrs[j]]+'</td>\n';
      }
      content += suh+'</tr>\n';
    }
    return content;
  }

  this.createEventClick = function(idTable) {
    let customerController = new CustomerController;
    $('#'+idTable+' tr').click(function(){
      let idUser = $(this).attr('name');
      customerController.getCustomer(idUser);
  });
  }
}