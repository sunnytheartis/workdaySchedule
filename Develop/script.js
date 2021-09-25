
//shows current date and time in the header
function currentDate(){
    var thisDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(thisDate);
}
currentDate();
var saveText = $("#saveBtn2").val()

function buttonClick() {
    localStorage.setItem("saveText", JSON.stringify);
}
//function refresh(){
//    if(hour===now){
//        textarea.toggleClass("present")
  //  }
  //  if(hour<now){
 //       textarea.toggleClass("past")
 //   }
  //  if (textarea>now){
  //      textarea.toggleClass("future")
 //   }
//}
//refresh();