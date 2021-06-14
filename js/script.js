
var studente = {
    nome : 'Mario',
    cognome : 'Rossi',
    eta : 20
};

for(var k in studente){
    document.getElementById('dati_studente').innerHTML += ' ' + studente[k];
}

var classe = [
    {
        nome : 'Mario',
        cognome : 'Rossi',
        eta : 20
    },

    {
        nome : 'Giacomo',
        cognome : 'Bianchi',
        eta : 22
    },

    {
        nome : 'Maria',
        cognome : 'Zaia',
        eta : 18
    }
];



/* input */

var nomeInput = uppercase(prompt('Inserisci nome nuove studente:'));
var cognomeInput = uppercase(prompt('Inserisci il cognome del nuovo studente:'));
var etaInput = parseInt(prompt('Inserisci età nuovo studente:'));


var nuovoStudente = {
    nome : nomeInput,
    cognome : cognomeInput,
    eta : etaInput
};

classe.push(nuovoStudente);

for(var i = 0; i < classe.length; i++){
    document.getElementById('classe').innerHTML += ' ' + classe[i].nome + classe[i].cognome;
}



/* function */

function uppercase (stringa){
    return stringa.charAt(0).toUpperCase()+ stringa.slice(1);
}









