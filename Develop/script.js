
//shows current date and time in the header
function currentDate(){
    var thisDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(thisDate);
}
currentDate();