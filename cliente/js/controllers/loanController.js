const loanModel = new LoanModel();

function LoanController(){
  //get list active loans
  this.getActiveLoans = function(){
    $('#actionSection').text("");
    $('#content').text("");
    $('#content').append("Lista de prestamos aquí");
    navbarUtilities.reestablishBootomBar();
  }

  // get list of loans by userId
  this.getLoansFromUserId = function(customerId) {
    $('#content2').text("");
    createActionSection(customerId);
    loanModel.getLoansFromUserId(customerId);
  }

  // Set new loan
  this.setNewLoan = async function (loan, customerId) {
    let newLoan = readSerializedLoanData(loan)
    newLoan['custId'] = customerId;
    await loanModel.postLoanFromUser(newLoan);
    //this.getLoansFromUserId(customerId);
  }
}

/**
 * Crea el contenido de la sección de acción
 * @param {number} customerId 
 */
function createActionSection(customerId) {
  $('#actionSection2').text("");
  $('#actionSection2').append('<h3 class="center">Contratos</h3>');
  buttonsUtilities.createAddLoanButton(customerId);
}


function readSerializedLoanData(loan) {
  let newLoan = {}
  loan.forEach(element => {
      switch (element.name) {
          case "date":
              newLoan['date'] = getDateSQLFormat(element.value);
              break;
          case "amount":
              newLoan['valueIni'] = element.value.replaceAll(",", "");
              break;
          case "percentage":
              newLoan['percentage'] = element.value;
              break;
          case "address":
              newLoan['address'] = element.value;
              break;
          case "mortgageNumber":
              newLoan['mortage_number'] = element.value;
              break;
          case "notary":
              newLoan['notary'] = element.value;
              break;  
          case "comment":
              newLoan['comments'] = element.value;
              break;  
          default:
              break;
      }
  });

  return newLoan;
}