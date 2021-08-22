/**
 * Create a form field
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input
 * @param {string} idName Id and Name of the input
 * @returns Structure of a form field
 */
function createField(iconType, nameIcon, inputType, labelText, idName) {
  let field = '';
  field += '<div class="input-field inline">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'">\n';
  field += '  <label for="'+idName+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}

/**
 * Create a form field with class
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input
 * @param {string} idName Id and Name of the input
 * @param {string} className class of the input
 * @returns Structure of a form field
 */
function createFieldWithClass(iconType, nameIcon, inputType, labelText, idName, className) {
  let field = '';
  field += '<div class="input-field inline">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'" class="'+className+'">\n';
  field += '  <label for="'+idName+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}


/**
 * 
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon 
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input 
 * @param {string} idName Id and Name of the input 
 * @param {string} dataType flag to know how to format the field
 * @returns 
 */
function createFieldFormating(iconType, nameIcon, inputType, labelText, idName, dataType) {
  let field = '';
  field += '<div class="input-field inline">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'" value="" data-type="'+dataType+'">\n';
  field += '  <label for="'+idName+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}

/**
 * Create a form field with format Error
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input
 * @param {string} idName Id and Name of the input
 * @param {string} className class of the input
 * @param {string} formatErrorMsg Message to show if the format is invalid 
 * @returns Structure of a form field
 */
 function createFieldWithFormaterror(iconType, nameIcon, inputType, labelText, idName, className, formatErrorMsg) {
  let field = '';
  field += '<div class="input-field inline">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'" class="'+className+'">\n';
  field += '  <label for="'+idName+'" data-error="'+formatErrorMsg+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}


/**
 * Create a form text area
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input
 * @param {string} idName Id and Name of the input
 * @returns Structure of a form text area
 */
function createTextArea(iconType, nameIcon, inputType, labelText, idName) {
  let field = '';
  field += '<div class="input-field inlinej">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'">\n';
  field += '  <label for="'+idName+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}


/**
 * Create a form text area
 * @param {number} iconType Send 1 to materialDesign Icon, 2 to FontAwsomeIcon
 * @param {string} nameIcon name o material o fontAwsome Icon
 * @param {string} inputType Type of field (text, number, date, tel, email)
 * @param {string} labelText Label next to input
 * @param {string} idName Id and Name of the input
 * @param {string} className class of the input
 * @param {string} formatErrorMsg Message to show if the format is invalid 
 * @returns Structure of a form text area
 */
 function createTextAreaWithFormaterror(iconType, nameIcon, inputType, labelText, idName, className, formatErrorMsg) {
  let field = '';
  field += '<div class="input-field inlinej">\n';
  field += createIcon(iconType, nameIcon);
  field += '  <input type="'+inputType+'" name="'+idName+'" id="'+idName+'" class="'+className+'">\n';
  field += '  <label for="'+idName+'" data-error="'+formatErrorMsg+'">'+labelText+'</label>\n';
  field += '</div>\n';
  return field;
}

// Return material or fontAwsome icon
function createIcon(iconType, nameIcon){
  if(iconType == 1){
    return '  <i class="material-icons prefix">'+nameIcon+'</i>\n';
  }else{
    return '  <i class="'+nameIcon+' prefix"></i>\n';
  }
}