// var romanNumerals = function(roman) {
//   if (("I" === "1" && "V" === "5" && "X" === "10"))
// }


$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    $("#result").show()
    var resultcomment = ""
    var warningcomment = ""
    var usernumber = $("input#usernumber").val()
    if (parseInt(usernumber) >= 4000 || parseInt(usernumber) <= 0) {
      warningcomment = "Number invalid; Roman numerals only count from 1 to 3,999."
      $("#result").hide()
    } else if (parseInt(usernumber) >= 1000 && parseInt(usernumber) < 2000) {
      resultcomment = resultcomment + "M"
    } else if (parseInt(usernumber) >= 2000 && parseInt(usernumber) < 3000) {
      resultcomment = resultcomment + "MM"
    } else if (parseInt(usernumber) >= 3000 && parseInt(usernumber) < 4000) {
      resultcomment = resultcomment + "MMM"
    }
    if ((parseInt(usernumber) >= 900 && parseInt(usernumber) < 1000) || (parseInt(usernumber) >= 1900 && parseInt(usernumber) < 2000) || (parseInt(usernumber) >= 2900 && parseInt(usernumber) <3000) || (parseInt(usernumber) >= 3900 && parseInt(usernumber) < 4000)) {
      resultcomment = resultcomment + "CM"
    }
    if ((parseInt(usernumber) >= 800 && parseInt(usernumber) < 900) || (parseInt(usernumber) >= 1800 && parseInt(usernumber) < 1900) || (parseInt(usernumber) >= 2800 && parseInt(usernumber) < 2900) || (parseInt(usernumber) >= 3800 && parseInt(usernumber) < 3900)) {
      resultcomment = resultcomment + "DCCC"
    }
    if ((parseInt(usernumber) >= 700 && parseInt(usernumber) < 800) || (parseInt(usernumber) >= 1700 && parseInt(usernumber) < 1800) || (parseInt(usernumber) >= 2700 && parseInt(usernumber) < 2800) || (parseInt(usernumber) >= 3700 && parseInt(usernumber) < 3800)) {
      resultcomment = resultcomment + "DCC"
    }
    if ((parseInt(usernumber) >= 600 && parseInt(usernumber) < 700) || (parseInt(usernumber) >= 1600 && parseInt(usernumber) < 1700) || (parseInt(usernumber) >= 2600 && parseInt(usernumber) < 2700) || (parseInt(usernumber) >= 3600 && parseInt(usernumber) < 3700)) {
      resultcomment = resultcomment + "DC"
    }
    if ((parseInt(usernumber) >= 500 && parseInt(usernumber) < 600) || (parseInt(usernumber) >= 1500 && parseInt(usernumber) < 1600) || (parseInt(usernumber) >= 2500 && parseInt(usernumber) < 2600) || (parseInt(usernumber) >= 3500 && parseInt(usernumber) < 3600)) {
      resultcomment = resultcomment + "D"
    }
    if ((parseInt(usernumber) >= 4400 && parseInt(usernumber) < 500) || (parseInt(usernumber) >= 1400 && parseInt(usernumber) < 1500) || (parseInt(usernumber) >= 2400 && parseInt(usernumber) < 2500) || (parseInt(usernumber) >= 3400 && parseInt(usernumber) < 3500)) {
      resultcomment = resultcomment + "CD"
    }

    $("#result").text(resultcomment)
    $("#warning").text(warningcomment)

  });
});
