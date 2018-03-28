// User-Interface Logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var inputYear = parseInt($("#year").val());
    var result = leapYear(inputYear);

    $("#result").text(result);
  });
});

// Business Logic
var leapYear = function(year) {
  if (isNaN(year)) {
    $("#result").text("Please enter a year.");
  } else if ((year % 4 ===0) && (year % 100 !==0) || (year % 4 ===0)) {
    $("#result").text("This is a leap year!");
  } else {
    $("#result").text("This is NOT a leap year!");
  }
  // if (year % 400 ===0) {
  //   return true;
  // } else if (year % 100 ===0) {
  //   return false;
  // } else if (year % 4 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
};
