document.addEventListener("DOMContentLoaded", function() {
    init()
});

function init() {
    console.log("init");
    currentTime();
}

function currentTime() {
    var time = document.getElementById("time");
    time.innerHTML = "12:34:56";
}