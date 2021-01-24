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
    contentNavBar += '     <ul class="right hide-on-med-and-down tabs tabs-transparent">\n';
    contentNavBar += '       <li class="tab"><a href="#" id="customerBtn">Clientes</a></li>\n';
    contentNavBar += '       <li class="tab"><a href="#" id="loansBtn">Prestamos</a></li>\n';
    contentNavBar += '     </ul>';
    contentNavBar += '     <ul id="mobile-nav" class="side-nav">\n';
    contentNavBar += '       <li><a href="#" id="customerBtn">Clientes</a></li>\n';
    contentNavBar += '       <li><a href="#" id="loansBtn">Prestamos</a></li>\n';
    contentNavBar += '     </ul>';
    contentNavBar += '   </div>\n';
    contentNavBar += ' </div>\n';
    contentNavBar += '</nav>';

    $('header').text("");
    $('header').append(contentNavBar);
  }


  this.removeBottonMarignNavBar = function() {
    $('#customerBtn').removeClass();
    $('.nav-wrapper').find('.indicator').removeClass('indicator').addClass('indicatore');
  }
  
  /**
  * Reestablish bottom margin of NAVBAR
  */
  this.reestablishBootomBar = function() {
    $('.nav-wrapper').find('.indicatore').removeClass('indicatore').addClass('indicator');
  }
}