
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

var nomeInput = prompt('Inserisci nome nuove studente:');
var maiuscolaNome = nomeInput.charAt(0).toUpperCase()+ nomeInput.slice(1);

var cognomeInput = prompt('Inserisci il cognome del nuovo studente:');
var maiuscolaCognome = cognomeInput.charAt(0).toUpperCase()+ cognomeInput.slice(1);

var etaInput = parseInt(prompt('Inserisci età nuovo studente:'));


var nuovoStudente = {
    nome : maiuscolaNome,
    cognome : maiuscolaCognome,
    eta : etaInput
};

classe.push(nuovoStudente);

for(var i = 0; i < classe.length; i++){
    document.getElementById('classe').innerHTML += ' ' + classe[i].nome + classe[i].cognome;
}










