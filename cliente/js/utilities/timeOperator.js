/**
 * Calcula los meses y dias transcurridos hasta hoy 
 * dado un número de días y una fechaInicial
 * @param {numer} daysTotal
 * @param {date} startDate
 * @returns {varchar} Años, Meses y Dias transcurridos en un texto
 */
function getMonthsDaysBetweenDates(daysTotal, startDate) {
  let result = "";
  let daysCal = 0; //cantidad de días calculados
  let numberDays = daysTotal;
  var numberMonths = 0;

  while(daysTotal > daysCal){
    let daysOfMonth = daysInMonth(startDate.getMonth()+1, startDate.getFullYear());
    daysCal = daysCal + daysOfMonth;
    if(daysCal <= daysTotal){
      numberMonths ++;
      numberDays -= daysOfMonth
    }
    // Se le suman los dias del mes a la fecha inicial
    startDate.setDate(startDate.getDate() + daysOfMonth);
  }
  // Se crea el mensaje
  if (numberMonths > 0) {
    result = numberMonths + ' meses';
  }
     
  if (numberDays > 0) {
     if (numberMonths > 0) result += ' y ';         
     result += numberDays + ' días';
  }
  return [result, numberMonths, numberDays];
}


/**
 * Obtiene la cantidad de días que tiene un mes
 * dado un mes y año
 * @param {number} month 
 * @param {number} year 
 * @returns {number} cantidad de días 
 */
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
