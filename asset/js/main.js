/* Mail
 Chiedi all’utente la sua email,
 controlla che sia nella lista di chi può accedere, 
 stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
 Usiamo un input e un bottone per inserire la mail 
 e poi mostriamo i risultati in pagina. */


 //steps
 //Ask user'email
 const whitelist = [
    'email@gmail.com',
    'email@live.it',
    'email@libero.it'
]
 const buttonEmail = document.getElementById('button_email')
 buttonEmail.addEventListener ('click', function () {
    const userEmail = document.getElementById("user_email").value
    const emailValue = userEmail
    console.log(userEmail);
})
 //check if user'email is into whaitlist

//print a message for the outcome of the check