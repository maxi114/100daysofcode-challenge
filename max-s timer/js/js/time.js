$(document).ready(function() {

    //variables to store the number of HRS, MIN and seconds
    var hr = 0;
    var min = 0;
    var sec = 0;

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
        min += 1;
        $(".min2").html(min);
        return min;
    })

    //function to run the sec buttons
    $(".secdec").click(function() {

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
        sec += 1;
        $(".sec2").html(sec);
        return sec;
    })

    //variable that stores the count
    var counter;

    //start button function
    $(".start").click(function() {

        //second function
        counter = setInterval(seconds, 1000);

        function seconds() {
            sec -= 1;
            if (sec === 0) {
                clearInterval(counter);
            }
            $(".sec2").html(sec);
        }



    })


});