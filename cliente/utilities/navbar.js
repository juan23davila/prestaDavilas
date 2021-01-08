function NavbarUtilities(){
  
  this.createNavBar = function(){
    var contentNavBar = "";

    contentNavBar += '<nav class="black">\n';
    contentNavBar += ' <div class="nav-wrapper">\n';
    contentNavBar += '   <div class="container">\n';
    contentNavBar += '     <a href="#" class="brand-logo"><i>Presta Dávilas</i></a>\n';
    contentNavBar += '     <a href="#" class="button-collapse" data-activates="mobile-nav">\n';
    contentNavBar += '       <i class="material-icons">menu</i>\n';
    contentNavBar += '     </a>\n';
    contentNavBar += '     <ul class="right hide-on-med-and-down">\n';
    contentNavBar += '       <li><a href="#" class="customerBtn">Clientes</a></li>\n';
    contentNavBar += '       <li><a href="#" class="loansBtn">Prestamos</a></li>\n';
    contentNavBar += '     </ul>';
    contentNavBar += '     <ul id="mobile-nav" class="side-nav">\n';
    contentNavBar += '       <li><a href="#" class="customerBtn">Clientes</a></li>\n';
    contentNavBar += '       <li><a href="#" class="loansBtn">Prestamos</a></li>\n';
    contentNavBar += '     </ul>';
    contentNavBar += '   </div>\n';
    contentNavBar += ' </div>\n';
    contentNavBar += '</nav>';

    $('header').text("");
    $('header').append(contentNavBar);
  }
}