//make sure the document loads first before applying jquery
$(document).ready(function() {
retrieveInput();  
// Displays current date in jumbotron
var currentDay = $("#currentDay");
currentDay.text(moment().format('LLLL'));

// Save Button functionality
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").text();
        localStorage.setItem(time,value);
});
 
var now = new Date($.now());
console.log(now);
var currentHour = now.getHours();
console.log(currentHour);

function retrieveInput() {
    var input9 = localStorage.getItem('9am');
    $("#hour-9 .description").text(input9);

    var input10= localStorage.getItem('10am');
    $("#hour-10 .description").text(input10);

    var input11 = localStorage.getItem('11am');
    $("#hour-11 .description").text(input11);

    var input12 = localStorage.getItem('12pm');
    $("#hour-12 .description").text(input12);

    var input1 = localStorage.getItem('1pm');
    $("#hour-1 .description").text(input1);

    var input2 = localStorage.getItem('2pm');
    $("#hour-2 .description").text(input2);

    var input3 = localStorage.getItem('3pm');
    $("#hour-3 .description").text(input3);

    var input4 = localStorage.getItem('4pm');
    $("#hour-4 .description").text(input4);

    var input5 = localStorage.getItem('5pm');
    $("#hour-5 .description").text(input5);
}
});