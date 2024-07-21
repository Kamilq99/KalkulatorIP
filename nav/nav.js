document.addEventListener("DOMContentLoaded", function() {
    fetch('/nav/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });
});