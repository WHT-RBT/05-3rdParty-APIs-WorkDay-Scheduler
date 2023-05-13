$(document).ready(function() {

// Get the current date and time using Day.js
var now = dayjs();

// Display the date on the page header
$("#currentDay").text(now.format("dddd, MMMM D, YYYY"));

//time block coloring
colorTimeBlocks();
setInterval(colorTimeBlocks, 60000);

function colorTimeBlocks() {
  $(".time-block").each(function() {

var blockHour = parseInt($(this).attr("data-hour"));
var currentHour = parseInt(now.format("H"));

// Remove any previous class
$(this).removeClass("past present future");

// Add the appropriate class based on past, present, future
if (blockHour < currentHour) {
  $(this).addClass("past");
} else if (blockHour === currentHour) {
  $(this).addClass("present");
} else {
  $(this).addClass("future");
}
});
}

//Load any saved data from local storage
$(".description").each(function() {
  var id = $(this).attr("id");
  var data = localStorage.getItem(id);

  if (data !== null) {
    $(this).val(data);
  }
});

//Save data to local storage when save button is clicked
$(".saveBtn").on("click", function() {
  var id = $(this).siblings(".description").attr("id");
  var data = $(this).siblings(".description").val();

  localStorage.setItem(id, data);
});
});