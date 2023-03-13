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
buttonEmail.addEventListener('click', function () {
    const userEmail = document.getElementById("user_email").value
    const emailValue = userEmail
    const result = document.querySelector('p');
    console.log(userEmail);
    //check if user'email is into whaitlist
    let denner
    
    for (let i = 0; i < whitelist.length; i++) {
        if (whitelist[i] == userEmail) {
            console.log('email presente puoi accedere');
            i = whitelist.length
            result.innerHTML = `email presente puoi accedere`;
        }else {
            denner = 'email non presente non puoi accedere'
            console.log('email non presente non puoi accedere');
            result.innerHTML = denner ;
        }
    }
})
//print a message for the outcome of the check