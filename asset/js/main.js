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
            //print a message for the outcome of the check
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
/* Generare un numero random da 1 a 6, sia per il giocatore sia per
 il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


//generete  two number random
let numberCPU = Math.floor(Math.random() * 6) + 1;
let number1P = Math.floor(Math.random() * 6) + 1;

console.log(`numero 1 Player :${number1P}`)
console.log(`numero CPU :${numberCPU}`)
//check who have number more for win
if (number1P > numberCPU) {
    console.log("hai vinto")
} else if (number1P < numberCPU) {
    console.log("hai perso") 
} else {
    console.log("hai pareggiato");
}
