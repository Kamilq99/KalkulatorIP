document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Wstaw swój rzeczywisty URL API do wysyłania e-maili
    fetch('https://your-server-url/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    }).then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            document.getElementById('contactForm').reset(); // Czyści formularz po wysłaniu
        } else {
            alert('Failed to send email.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});