/**function DateUtilities()
{
  this.getCurrentDate = function(){
    let nowDate = new Date();
    let day = ("0" + nowDate.getDate()).slice(-2);
    let month = ("0" + (nowDate.getMonth()+1)).slice(-2);
    let year = nowDate.getFullYear();
    let hour = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();
    let registerDate = "'"+year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds+"'";

    return registerDate;
  }
}*/


function getCurrentDate(){
  let nowDate = new Date();
  let day = ("0" + nowDate.getDate()).slice(-2);
  let month = ("0" + (nowDate.getMonth()+1)).slice(-2);
  let year = nowDate.getFullYear();
  let hour = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  let registerDate = "'"+year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds+"'";

  return registerDate;
}

module.exports = {
  getCurrentDate : getCurrentDate
}