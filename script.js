$(document).ready(function() {

// Get the current date and time using Day.js
var now = dayjs();
var currentHour = dayjs().format('H');

// Display the date on the page header
$("#currentDay").text(now.format("dddd, MMMM D, YYYY"));

//time block coloring
$(".time-block").each(function() {
var blockHour = parseInt($(this).attr("id").split("-")[1]);

//this removeds any existing classes
$(this).removeClass("past present future");

//adding appropriate class to time block
if (blockHour < currentHour) {
  $(this).addClass("past");
} else if (blockHour == currentHour) {
  $(this).addClass("present");
} else {
  $(this).addClass("future");
}
});

//Save data to local storage when save button is clicked
$(".saveBtn").on("click", function() {
var id = $(this).siblings(".description").attr("id");
var data = $(this).siblings(".description").val();
var savedData = { id: id, data: data };
localStorage.setItem(id, JSON.stringify(savedData));
});

//Load saved data from local storage
$(".description").each(function() {
var id = $(this).attr("id");
var savedData = localStorage.getItem(id);
if (savedData !== null) {
savedData = JSON.parse(savedData);
if (id === savedData.id) {
$(this).val(savedData.data);
}
}
});
});