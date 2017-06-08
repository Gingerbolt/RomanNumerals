$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var usernumber = parseInt($("input#usernumber").val());
    var userstring = usernumber.toString();
    var tensplace = ((userstring.length) - 2);
    var onesplace = ((userstring.length) - 1);
    $("#result").show();
    var resultcomment = "";
    var warningcomment = "" ;
    if (usernumber >= 4000 ||   usernumber <= 0) {
      warningcomment = "Number invalid; Roman numerals only count from 1 to 3,999."
      $("#result").hide()
    } else if (usernumber >= 1000 && usernumber < 2000) {
      resultcomment = resultcomment + "M"
    } else if (usernumber >= 2000 && usernumber < 3000) {
      resultcomment = resultcomment + "MM"
    } else if (  usernumber >= 3000 &&   usernumber < 4000) {
      resultcomment = resultcomment + "MMM"
    }
    if ((  usernumber >= 900 &&   usernumber < 1000) || (  usernumber >= 1900 &&   usernumber < 2000) || (  usernumber >= 2900 &&   usernumber <3000) || (  usernumber >= 3900 &&   usernumber < 4000)) {
      resultcomment = resultcomment + "CM"
    }
    if ((  usernumber >= 800 &&   usernumber < 900) || (  usernumber >= 1800 &&   usernumber < 1900) || (  usernumber >= 2800 &&   usernumber < 2900) || (  usernumber >= 3800 &&   usernumber < 3900)) {
      resultcomment = resultcomment + "DCCC"
    }
    if ((  usernumber >= 700 &&   usernumber < 800) || (  usernumber >= 1700 &&   usernumber < 1800) || (  usernumber >= 2700 &&   usernumber < 2800) || (  usernumber >= 3700 &&   usernumber < 3800)) {
      resultcomment = resultcomment + "DCC"
    }
    if ((  usernumber >= 600 &&   usernumber < 700) || (  usernumber >= 1600 &&   usernumber < 1700) || (  usernumber >= 2600 &&   usernumber < 2700) || (  usernumber >= 3600 &&   usernumber < 3700)) {
      resultcomment = resultcomment + "DC"
    }
    if ((  usernumber >= 500 &&   usernumber < 600) || (  usernumber >= 1500 &&   usernumber < 1600) || (  usernumber >= 2500 &&   usernumber < 2600) || (  usernumber >= 3500 &&   usernumber < 3600)) {
      resultcomment = resultcomment + "D"
    }
    if ((  usernumber >= 400 &&   usernumber < 500) || (  usernumber >= 1400 &&   usernumber < 1500) || (  usernumber >= 2400 &&   usernumber < 2500) || (  usernumber >= 3400 &&   usernumber < 3500)) {
      resultcomment = resultcomment + "CD"
    }
    if ((  usernumber >= 300 &&   usernumber < 400) || (  usernumber >= 1300 &&   usernumber < 1400) || (  usernumber >= 2300 &&   usernumber < 2400) || (  usernumber >= 3300 &&   usernumber < 3400)) {
      resultcomment = resultcomment + "CCC"
    }
    if ((  usernumber >= 200 &&   usernumber < 300) || (  usernumber >= 1200 &&   usernumber < 1300) || (  usernumber >= 2200 &&   usernumber < 2300) || (  usernumber >= 3200 &&   usernumber < 3300)) {
      resultcomment = resultcomment + "CC"
    }
    if ((  usernumber >= 100 &&   usernumber < 200) || (  usernumber >= 1100 &&   usernumber < 1200) || (  usernumber >= 2100 &&   usernumber < 2200) || (  usernumber >= 3100 &&   usernumber < 3200)) {
      resultcomment = resultcomment + "C"
    }
    if (userstring.charAt(tensplace) == 9) {
      resultcomment = resultcomment + "XC"
    }
    if (userstring.charAt(tensplace) == 8) {
      resultcomment = resultcomment + "LXXX"
    }
    if (userstring.charAt(tensplace) == 7) {
      resultcomment = resultcomment + "LXX"
    }
    if (userstring.charAt(tensplace) == 6) {
      resultcomment = resultcomment + "LX"
    }
    if (userstring.charAt(tensplace) == 5) {
      resultcomment = resultcomment + "L"
    }
    if (userstring.charAt(tensplace) == 4) {
      resultcomment = resultcomment + "XL"
    }
    if (userstring.charAt(tensplace) == 3) {
      resultcomment = resultcomment + "XXX"
    }
    if (userstring.charAt(tensplace) == 2) {
      resultcomment = resultcomment + "XX"
    }
    if (userstring.charAt(tensplace) == 1) {
      resultcomment = resultcomment + "X"
    }
    if (userstring.charAt(onesplace) == 9) {
      resultcomment = resultcomment + "IX"
    }
    if (userstring.charAt(onesplace) == 8) {
      resultcomment = resultcomment + "VIII"
    }
    if (userstring.charAt(onesplace) == 7) {
      resultcomment = resultcomment + "VII"
    }
    if (userstring.charAt(onesplace) == 6) {
      resultcomment = resultcomment + "VI"
    }
    if (userstring.charAt(onesplace) == 5) {
      resultcomment = resultcomment + "V"
    }
    if (userstring.charAt(onesplace) == 4) {
      resultcomment = resultcomment + "IV"
    }
    if (userstring.charAt(onesplace) == 3) {
      resultcomment = resultcomment + "III"
    }
    if (userstring.charAt(onesplace) == 2) {
      resultcomment = resultcomment + "II"
    }
    if (userstring.charAt(onesplace) == 1) {
      resultcomment = resultcomment + "I"
    }

    $("#result").text(resultcomment);
    $("#warning").text(warningcomment);

  });
});
