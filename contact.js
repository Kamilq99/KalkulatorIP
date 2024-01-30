document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Zapobiegamy domyślnej akcji formularza (przeładowaniu strony)

        // Pobieramy dane z formularza
        var imie = document.getElementById('imie').value;
        var email = document.getElementById('email').value;
        var wiadomosc = document.getElementById('wiadomosc').value;

        // Tutaj możesz wywołać odpowiednie API lub serwer do obsługi wysyłania e-maili
        // Na potrzeby tego przykładu wyświetlamy dane w konsoli przeglądarki
        console.log('Dane do wysłania:', { imie: imie, email: email, wiadomosc: wiadomosc });

        // Tutaj możesz wywołać kod obsługujący wysyłanie danych na serwer lub do usługi e-mail
        // Należy skontaktować się z dostawcą usługi e-mail w celu uzyskania odpowiednich API lub narzędzi

        // Opcjonalnie możesz dodać potwierdzenie wysłania lub inne działanie po wysłaniu formularza
    });
});
