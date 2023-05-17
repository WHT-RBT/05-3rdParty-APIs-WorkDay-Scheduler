$(document).ready(function() {

//get current date and time using Day.js
var now = dayjs();
var currentHour = dayjs().format('H');

//display the date on page header
$("#currentDay").text(now.format("dddd, MMMM D, YYYY"));

//time block coloring
$(".time-block").each(function() {
var blockHour = parseInt($(this).attr("id").split("-")[1]);

//this removes any existing classes
$(this).removeClass("past present future");

//adding classes to time block
if (blockHour < currentHour) {
  $(this).addClass("past");
} else if (blockHour == currentHour) {
  $(this).addClass("present");
} else {
  $(this).addClass("future");
}
});

//load saved data from localstorage
 loadSavedData();

$('.saveBtn').on('click', function() {

var hour = $(this).parent().attr('id');
var description = $(this).siblings('.description').val().trim();

//save the description to localstorage
localStorage.setItem(hour, description);
});

//function to load saved data from localstorage
function loadSavedData() {
$('.time-block').each(function() {
var hour = $(this).attr('id');
var savedDescription = localStorage.getItem(hour);

//set the saved description
$(this).find('.description').val(savedDescription);
});
}
});
