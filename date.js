document.addEventListener("DOMContentLoaded", function() {
    var dateDivs = document.getElementsByClassName("Todaydate");

    for (var i = 0; i < dateDivs.length; i++) {
        var today = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var formattedDate = today.toLocaleDateString('en-US', options);

        dateDivs[i].textContent = "Today's Date: " + formattedDate;
    }
});
