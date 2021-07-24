$(document).ready(function () {
    var getCurrentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(getCurrentDate);


    // Get current time in hour.
    var currentHour = moment().hour();

    // Continously updated the blocks by check the time.
    var timeBlockUpdate = function () {
        $(".time-block").each(function () {

            var timeBlockHourTime = parseInt($(this).attr("id").split("-")[1]);
            // console.log("This is the time block hour: " + timeBlockHourTime);

            // If time period is before current time set time block to grey.
            // If time period is at current time, set time block to red.
            // If time period is  in the futre set time block to green.
            if (timeBlockHourTime < currentHour) {
                $(this).addClass("past");
            } else if (timeBlockHourTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });


    };

    timeBlockUpdate();
    var timeBlockUpdated = setInterval(timeBlockUpdate, 15000);


    // Load events or tasks from local storage.
});