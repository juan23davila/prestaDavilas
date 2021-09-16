
function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatPer(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "");
}

// Used to forms
function formatCurrency(input, blur) {

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === "") { return; }

  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
  
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

function formatPercentage(input, blur) {
  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === "") { return; }

  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);
    
    // add commas to left side of number
    left_side = formatPer(left_side);

    // validate right side
    right_side = formatPer(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "0";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 1);

    // join number by .
    input_val = left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatPer(input_val);
  }

  // send updated string to input
  input.val(input_val);
}

/**
 * Converts dd/mmm/yyyy -> yyyy-mm-dd
 * @param {string} dateA 
 * @returns date to save un MySql
 */
function getDateSQLFormat(dateA) {
  let meses = {"Ene":01, "Feb":02, "Mar":03, "Apr":04, "May":05, "Jun":06, "Jul":07, "Ago":08, "Sep":09, "Oct":10, "Nov":11, "Dic":12};
  let dateB = dateA;
  dateB = dateB.replace(dateA.substring(3,6), meses[dateA.substring(3,6)]);
  dateB = dateB.replaceAll("/", "-");
  dateB = dateB.split("-").reverse().join("-");
  return dateB;
}


/**
 * Converts to $0,000,000.
 * @param {number} value 
 * @returns valor formateado a moneda.
 */
 function formatToMoney(value) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return formatter.format(value);
}


/**
 * Format from UNIX_TIMESTAMP to dd/mmm/yyyy
 * @param {number} dateUnix 
 * @returns dd/mmm/yyyy
 */
 function processDate (dateUnix){
  var date = new Date(dateUnix * 1000);
  iniDate = date;
  dia_mes = date.getDate(); //dia del mes
  mes = date.getMonth() + 1;
  anio = date.getFullYear();
  return dia_mes+"/"+nombres_meses[mes - 1]+"/"+anio;
}



