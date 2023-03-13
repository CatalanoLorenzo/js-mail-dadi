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
    let access= "mail presente puoi accedere"
    let denit = "email non presente"
    //check if user'email is into whaitlist
    for (let i = 0; i < whitelist.length; i++) {
        if (whitelist[i] == userEmail) {
            //print a message for the outcome of the check
            access = 'mail presente puoi accedere'
            denit = ""
    }
}
    result.innerHTML = (denit);
    result.innerHTML = (access)
    console.log( access,denit);
})
/* Generare un numero random da 1 a 6, sia per il giocatore sia per
 il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


//generete  two number random
const cardNumberCPU = document.getElementById('computer');
const cardNumberPlayer = document.getElementById('player');
const cardResult = document.getElementById('game_result');
const buttonplay = document.getElementById('play')
buttonplay.addEventListener('click', function () {
    let numberCPU = Math.floor(Math.random() * 6) + 1;
    let number1P = Math.floor(Math.random() * 6) + 1;
    console.log(`numero 1 Player :${number1P}`);
    cardNumberPlayer.innerHTML = number1P;
    console.log(`numero CPU :${numberCPU}`);
    cardNumberCPU.innerHTML = numberCPU;
    //check who have number more for win
    if (number1P > numberCPU) {
        console.log("hai vinto");
        cardResult.innerHTML = "hai vinto";
    } else if (number1P < numberCPU) {
        console.log("hai perso");
        cardResult.innerHTML = "hai perso";
    } else {
        console.log("hai pareggiato");
        cardResult.innerHTML = "hai pareggiato";
    }
})