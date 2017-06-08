$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var usernumber = parseInt($("input#usernumber").val());
    var userstring = usernumber.toString();
    var thousandsplace = ((userstring.length) - 4);
    var hundredsplace = ((userstring.length) - 3);
    var tensplace = ((userstring.length) - 2);
    var onesplace = ((userstring.length) - 1);
    $("#result").show();
    var resultcomment = "";
    var warningcomment = "" ;
    if (usernumber >= 4000 ||   usernumber <= 0) {
      warningcomment = "Number invalid; Roman numerals only count from 1 to 3,999."
      $("#result").hide()
    }
    if (userstring.charAt(thousandsplace) == 1) {
      resultcomment = resultcomment + "M"
    } else if (userstring.charAt(thousandsplace) == 2) {
      resultcomment = resultcomment + "MM"
    } else if (userstring.charAt(thousandsplace) == 3) {
      resultcomment = resultcomment + "MMM"
    }
    if (userstring.charAt(hundredsplace) == 9) {
      resultcomment = resultcomment + "CM"
    } else if (userstring.charAt(hundredsplace) == 8) {
      resultcomment = resultcomment + "DCCC"
    } else if (userstring.charAt(hundredsplace) == 7) {
      resultcomment = resultcomment + "DCC"
    } else if (userstring.charAt(hundredsplace) == 6) {
      resultcomment = resultcomment + "DC"
    } else if (userstring.charAt(hundredsplace) == 5) {
      resultcomment = resultcomment + "D"
    } else if (userstring.charAt(hundredsplace) == 4) {
      resultcomment = resultcomment + "CD"
    } else if (userstring.charAt(hundredsplace) == 3) {
      resultcomment = resultcomment + "CCC"
    } else if (userstring.charAt(hundredsplace) == 2) {
      resultcomment = resultcomment + "CC"
    } else if (userstring.charAt(hundredsplace) == 1) {
      resultcomment = resultcomment + "C"
    }
    if (userstring.charAt(tensplace) == 9) {
      resultcomment = resultcomment + "XC"
    } else if (userstring.charAt(tensplace) == 8) {
      resultcomment = resultcomment + "LXXX"
    } else if (userstring.charAt(tensplace) == 7) {
      resultcomment = resultcomment + "LXX"
    } else if (userstring.charAt(tensplace) == 6) {
      resultcomment = resultcomment + "LX"
    } else if (userstring.charAt(tensplace) == 5) {
      resultcomment = resultcomment + "L"
    } else if (userstring.charAt(tensplace) == 4) {
      resultcomment = resultcomment + "XL"
    } else if (userstring.charAt(tensplace) == 3) {
      resultcomment = resultcomment + "XXX"
    } else if (userstring.charAt(tensplace) == 2) {
      resultcomment = resultcomment + "XX"
    } else if (userstring.charAt(tensplace) == 1) {
      resultcomment = resultcomment + "X"
    }
    if (userstring.charAt(onesplace) == 9) {
      resultcomment = resultcomment + "IX"
    } else if (userstring.charAt(onesplace) == 8) {
      resultcomment = resultcomment + "VIII"
    } else if (userstring.charAt(onesplace) == 7) {
      resultcomment = resultcomment + "VII"
    } else if (userstring.charAt(onesplace) == 6) {
      resultcomment = resultcomment + "VI"
    } else if (userstring.charAt(onesplace) == 5) {
      resultcomment = resultcomment + "V"
    } else if (userstring.charAt(onesplace) == 4) {
      resultcomment = resultcomment + "IV"
    } else if (userstring.charAt(onesplace) == 3) {
      resultcomment = resultcomment + "III"
    } else if (userstring.charAt(onesplace) == 2) {
      resultcomment = resultcomment + "II"
    } else if (userstring.charAt(onesplace) == 1) {
      resultcomment = resultcomment + "I"
    }
    $("#result").text(resultcomment);
    $("#warning").text(warningcomment);
  });
});
