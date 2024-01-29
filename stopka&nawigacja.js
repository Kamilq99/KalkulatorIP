document.addEventListener("DOMContentLoaded", function() {

    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nawigacja").innerHTML = data;
        });

    fetch("stopka.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("stopka").innerHTML = data;
        });
});
