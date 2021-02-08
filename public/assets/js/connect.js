$(document).ready(function() {
    var interest = $(".interest");

    interest.on("click", function() {
        var choice = this.getAttribute('data-choice');
        // console.log(choice);
        $(".content").hide();

        sendInterest(choice);
    });

});

function sendInterest(choice) {
    $.post("/api/user/find", {
        choice: choice
    }).then(data => {
        window.location.href = "/api/connect/results";
    });
}