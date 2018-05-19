$(document).ready(function () {

    $("#questions").hide();


    $("#start").click(function () {
        $("#questions").show();

        run();

    });

    $("#submit").click(function () {
        stop();

        var q1 = $("#q1").val();
        var q2 = $("#q2").val();
        var q3 = $("#q3").val();
        var q4 = $("#q4").val();
        var q5 = $("#q5").val();
        var q6 = $("#q6").val();
        var q7 = $("#q7").val();
        var q8 = $("#q8").val();
        var q9 = $("#q9").val();
        var q10 = $("#q10").val();

        var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
        var answers = ["2", "1", "3", "2", "2", "3", "1", "3", "2", "2"];
        var correct = 0;
        var incorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            if (questions[i] === answers[i]) {
                correct++;
            };
        };

        $("#questions").empty();
        $("#questions").html("<h2> You scored " + (correct / 10) * 100 + "%" + "</h2>");


    });

    var intervalId;

    var timeRemaining = 120;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timeRemaining--;

        $("#time").text("Time Remaining: " + timeRemaining);

        if (timeRemaining === 0) {
            alert("Time's up!");
            stop();
            var q1 = $("#q1").val();
            var q2 = $("#q2").val();
            var q3 = $("#q3").val();
            var q4 = $("#q4").val();
            var q5 = $("#q5").val();
            var q6 = $("#q6").val();
            var q7 = $("#q7").val();
            var q8 = $("#q8").val();
            var q9 = $("#q9").val();
            var q10 = $("#q10").val();

            var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
            var answers = ["2", "1", "3", "2", "2", "3", "1", "3", "2", "2"];
            var correct = 0;
            var incorrect = 0;

            for (var i = 0; i < questions.length; i++) {
                if (questions[i] === answers[i]) {
                    correct++;
                };
            };

            $("#questions").empty();
            $("#questions").html("<h2> You scored " + (correct / 10) * 100 + "%" + "</h2>");
        }

    }

    function stop() {
        clearInterval(intervalId);
    }

})