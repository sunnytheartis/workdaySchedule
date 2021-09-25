
//shows current date and time in the header
function currentDate(){
    var thisDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(thisDate);
}
currentDate();
//changing block colors based on time
$(".time-block").children().each(function(){
    var Time = moment($(this).text(),"h:mm a");
    var now = moment().format();

    if (Time.isSame(now, "hour")){
        $(this).next().addClass('present');

    }if(Time.isAfter(now, 'hour')){
        $(this).next().addClass('future');

    }if(Time.isBefore(now,'hour')){
        $(this).next().addClass('past');
    }
    

})

//save values on click
$(".saveBtn").on('click', storeValues);


function storeValues(){
    var input = $(this).siblings("textarea").val().trim();
    var value = $(this).parent().attr('id');
    localStorage.setItem(value,input);
}



