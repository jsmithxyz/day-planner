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
var currentHour = now.getHours();
console.log(currentHour);
colorHour(); 

// Retrieves localStorage inputs at load
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
    $("#hour-13 .description").text(input1);

    var input2 = localStorage.getItem('2pm');
    $("#hour-14 .description").text(input2);

    var input3 = localStorage.getItem('3pm');
    $("#hour-15 .description").text(input3);

    var input4 = localStorage.getItem('4pm');
    $("#hour-16 .description").text(input4);

    var input5 = localStorage.getItem('5pm');
    $("#hour-17 .description").text(input5);
}

// Block color functionality
function colorHour() {
    var hour9 = $("#hour-9");
    hour9 = 9;
    var hour10 = $("#hour-10");
    hour10 = 10;
    var hour11 = $("#hour-11");
    hour11= 11;
    var hour12 = $("#hour-12");
    hour12 = 12;
    var hour1 = $("#hour-13");
    hour1 = 13;
    var hour2 = $("#hour-14");
    hour2 = 14;
    var hour3 = $("#hour-15");
    hour3 = 15;
    var hour4 = $("#hour-16");
    hour4 = 16;
    var hour5 = $("#hour-17");
    hour5 = 17;

    var hourArray = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];
    
    for(var i = 0; i < hourArray.length; i++)
    if(currentHour === hourArray[i]) {
        $("#hour-"+hourArray[i]+" textarea").css("background-color", "red");
    }
    else if(hourArray[i] > currentHour) {
        $("#hour-"+hourArray[i]+" textarea").css("background-color", "green");
    }
} 
});