$(document).ready(function() {

    //variables to store the number of HRS, MIN and seconds
    var hr = 0;
    var min = 0;
    var sec = 0;

    //sound to play when times up
    var timeup = new Audio("file:///C:/Users/Max%20Kodi/Downloads/16449_1460643352.mp3")

    //function to run the + and - hr buttons
    $(".hrdec").click(function() {

        $(".hr2").html(hr);
        if (hr === 0) {
            hr -= 0;
            alert("you can't have negative hours")
        } else {
            hr -= 1;
        }
        return hr
    })
    $(".hrinc").click(function() {

        hr += 1;
        $(".hr2").html(hr);
        return hr;
    })

    //function to run the min buttons
    $(".mindec").click(function() {

        $(".min2").html(min);
        if (min === 0) {
            min -= 0;
            alert("you can't have negative hours")
        } else {
            min -= 1;
        }
        return min;
    })
    $(".mininc").click(function() {
        if (min === 60) {
            alert("you cant have more than 60 minutes");

        } else {
            min += 1;
        }
        $(".min2").html(min);
        return min;
    })

    //function to run the sec buttons
    $(".secdec").click(function() {
        hr -= 1;

        $(".sec2").html(sec);
        if (sec === 0) {
            sec -= 0;
            alert("you can't have negative hours")
        } else {
            sec -= 1;
        }
        return sec
    })
    $(".secinc").click(function() {
        if (sec === 60) {
            alert("you cant have more than 60 seconds");
        } else {
            sec += 1;
        }
        $(".sec2").html(sec);
        return sec;
    })

    var secount;
    var mincount;
    var hrcount;

    //start button function
    $(".start").click(function() {

        //second function
        var secount = setInterval(seconds, 1000);

        function seconds() {
            sec -= 1;
            if (sec === -1 && min >= 1) {
                sec = 60;
            } else if (min === 0) {
                sec = 0;
                clearInterval(secount);
            }

            $(".time1").html(hr + ":" + min + ":" + sec);
            $(".sec2").html(sec);
        }

        //minutes count
        var mincount = setInterval(minutes, 1000);

        function minutes() {
            if (hr > 0 && min === 0 && sec === 0) {
                min = 60;
                sec = 60;
            }
            if (sec === 0 && min > 0) {
                min -= 1;
            }
            if (hr > 0 && min === -1) {
                min = 60;
            }
            if (min === 0) {
                timeup.play()
                clearInterval(mincount);
            }

            $(".time1").html(hr + ":" + min + ":" + sec);
            $(".min2").html(min);
        }

        //hr count


        var hrcount = setInterval(hour, 1000);

        function hour() {
            if (min === 0 && sec === 0 && hr != 0) {
                hr -= 1;
            }
            if (hr === 0) {
                clearInterval(hrcount);
            }
            $(".hr2").html(hr);
            $(".time1").html(hr + ":" + min + ":" + sec);

        }
    })

    //reset button
    $('.reset').click(function() {
        hr = 0;
        min = 0;
        sec = 0;
    })


});