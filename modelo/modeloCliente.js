var modeloCliente = 
function(
    idCustomer,
    identType,
    numIdent,
    custName,
    custLastName,
    cellPhone,
    phone,
    address,
    email,
    registerDate,
    active)
{
    this.idCustomer = idCustomer;
    this.identType = identType;
    this.numIdent = numIdent;
    this.custName = custName;
    this.custLastName = custLastName;
    this.cellPhone = cellPhone;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this. registerDate = registerDate;
    this.active = active;
}


var getAllCustomersQuery = "SELECT * FROM Customer;" 