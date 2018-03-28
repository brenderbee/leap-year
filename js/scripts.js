// Business Logic
var leapYear = function(year) {
  if (isNaN(year)) {
    $("#result").text("Please enter a year.");
  } else if ((year % 4 ===0) && (year % 100 !==0) || (year % 4 ===0)) {
      return true;
  } else {
      return false;
  }
};

// User-Interface Logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var inputYear = parseInt($("#year").val());
    var result = leapYear(inputYear);

    $(".year").text(inputYear);

     if (!result) {                 // same as writing if (result === false)
       $(".not").text("not");
     } else {
       $(".not").text("");
     }

   $(".result").show();
  });
});
