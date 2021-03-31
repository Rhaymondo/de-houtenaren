tippy('.winning-score', {
    content: 'Gefeliciteerd goed gedaan!! 🎉',
    animation: 'scale',
    theme: 'light'
  });

const amountWins = document.querySelectorAll('[data-wins]');



import * as data from '../data.json';
const word = data[0].tableContent;
word.splice(0, 37); 
word.splice(-2,2)
var regex = /(<([^>]+)>)/ig;
for(var i=0;i<word.length;i++){
  word[i] = word[i].replace(regex, "");
}

document.querySelector('.congrats').addEventListener('click', function() {
    document.querySelector('.koning-toto').classList.add('is-visible');
});

document.querySelector('.show-team-angelo').addEventListener('click', function() {
    document.querySelector('.team').classList.add('is-visible');
    document.querySelector('.team').innerHTML = teamAngelo;
});

document.querySelector('.show-team-co').addEventListener('click', function() {
    document.querySelector('.team').classList.add('is-visible');
    document.querySelector('.team').innerHTML = teamCo;
});
document.querySelector('.show-team-jorn').addEventListener('click', function() {
    document.querySelector('.team').classList.add('is-visible');
    document.querySelector('.team').innerHTML = teamJorn;
});
document.querySelector('.show-team-bram').addEventListener('click', function() {
    document.querySelector('.team').classList.add('is-visible');
    document.querySelector('.team').innerHTML = teamBram;
});
document.querySelector('.show-team-tho').addEventListener('click', function() {
    document.querySelector('.team').classList.add('is-visible');
    document.querySelector('.team').innerHTML = teamTho;
});

document.querySelector('.team').addEventListener('click', function() {
    document.querySelector('.team').classList.remove('is-visible');
});

var i,j,temparray,chunk = 39;
for (i=0,j=word.length; i<j; i+=chunk) {
    temparray = word.slice(i,i+chunk);
    console.log(temparray);
}

amountWins.forEach(function(el) {
    let amount = el.dataset.wins;
    let amountPlayed = 27;
    let amountPerRound = 10;
    let amountPerRoundWin = amountPerRound * 5;
    const balance = (amountPerRound * amountPlayed) - (amount * amountPerRoundWin)
    if(balance > 0) {
        el.parentNode.querySelector('[data-balance]').innerText = "-" + balance + " €";
        el.parentNode.querySelector('[data-balance]').classList.add('is-negative');
        tippy('.is-negative', {
            content: 'Betalen 🤦',
            animation: 'scale',
            theme: 'light',
            placement: 'right-end',
          });
    } else {
        el.parentNode.querySelector('[data-balance]').innerText = balance.toString().replace("-", "+ ")  + " €";
        el.parentNode.querySelector('[data-balance]').classList.add('is-positive');
        tippy('.is-positive', {
            content: 'Money Money Money 💰',
            animation: 'scale',
            theme: 'light',
            placement: 'right-end',
          });
    }
});

const teamAngelo = `
  <table>
    <tbody>
    <tr class="team__table-header">
        <td>Positie</td>
        <td>Speler</td>
        <td>Club</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>Sergio Padt</td>
        <td>FC Groningen</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>res: Maduka Okoye</td>
        <td>Sparta Rotterdam</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Jordan Teze</td>
        <td>PSV</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Edson Omar Alvarez</td>
        <td>Ajax</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Jayden Oosterwolde</td>
        <td>FC Twente</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>res: Caner Cavlan</td>
        <td>FC Emmen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Jens Toornstra</td>
        <td>Feyenoord</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Rai Vloet</td>
        <td>Heracles</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Teun Koopmeiners</td>
        <td>AZ</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Joey Veerman</td>
        <td>SC Heerenveen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>res: Nassim El Ablak</td>
        <td>Fortuna Sittard</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Gyrano Kerk</td>
        <td>FC Utrecht</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Lois Openda</td>
        <td>Vitesse</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Georgios Giakoumakis</td>
        <td>VVV Venlo</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>res: Ricardo Kishna</td>
        <td>ADO Den Haag</td>
    </tr>
    </tbody>
  </table>
`

const teamCo = `
  <table>
    <tbody>
    <tr class="team__table-header">
        <td>Positie</td>
        <td>Speler</td>
        <td>Club</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>Remko Pasveer</td>
        <td>Vitesse</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>res: Maduka Okoye</td>
        <td>Sparta Rotterdam</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Django Warmerdam</td>
        <td>FC Utrecht</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Marcos Senesi</td>
        <td>Feyenoord</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Philipp Max</td>
        <td>PSV</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>res: George Cox</td>
        <td>Fortuna Sittard</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Michael de Leeuw</td>
        <td>FC Emmen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Rai Vloet</td>
        <td>Heracles</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Teun Koopmeiners</td>
        <td>AZ</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Ahmed El Messaoudi</td>
        <td>FC Groningen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>res: Dean Huiberts</td>
        <td>PEC Zwolle</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Sebastien Haller</td>
        <td>Ajax</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Henk Veerman</td>
        <td>SC Heerenveen</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Danilo Pereira da Silva</td>
        <td>FC Twente</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>res: Kwasi Wriedt</td>
        <td>Willem II</td>
    </tr>
    </tbody>
  </table>
`

const teamJorn = `
  <table>
    <tbody>
    <tr class="team__table-header">
        <td>Positie</td>
        <td>Speler</td>
        <td>Club</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>Joël Drommel</td>
        <td>FC TWente</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>res: Bram Verbong</td>
        <td>VVV Venlo</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Sven van Beek</td>
        <td>Willem II</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Damil Dankerlui</td>
        <td>FC Groningen</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Eli Dasa</td>
        <td>Vitesse</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>res: Jeffry Fortes</td>
        <td>Sparta Rotterdam</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Jens Toornstra</td>
        <td>Feyenoord</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Rai Vloet</td>
        <td>Heracles</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Bart Ramselaar</td>
        <td>FC Utrecht</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Joey Veerman</td>
        <td>SC Heerenveen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>res: Eliano Reijnders</td>
        <td>PEC Zwolle</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Sebastien Haller</td>
        <td>Ajax</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Myron Boadu</td>
        <td>AZ</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Eran Zahavi</td>
        <td>PSV</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>res: Jonas Arweiler</td>
        <td>ADO Den Haag</td>
    </tr>
    </tbody>
  </table>
`

const teamBram = `
  <table>
    <tbody>
    <tr class="team__table-header">
        <td>Positie</td>
        <td>Speler</td>
        <td>Club</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>Janis Blaswich</td>
        <td>Heracles</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>res: Robin Jalving</td>
        <td>FC Emmen</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Bart van Hintum</td>
        <td>FC Groningen</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Lutsharel Geertruida</td>
        <td>Feyenoord</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Jayden Oosterwolde</td>
        <td>FC Twente</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>res: Ahmed Touba</td>
        <td>RKC Waalwijk</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Siem de Jong</td>
        <td>SC Heerenveen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Davy Klaassen</td>
        <td>Ajax</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Sander van der Streek</td>
        <td>FC Utrecht</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Teun Koopmeiners</td>
        <td>AZ</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>res: Sven Mijnans</td>
        <td>Sparta Rotterdam</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Donyell Malen</td>
        <td>PSV</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Ousamma Darfalou</td>
        <td>Vitesse</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Vangelis Pavlidis</td>
        <td>Willem II</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>res: Jonas Arweiler</td>
        <td>ADO Den Haag</td>
    </tr>
    </tbody>
  </table>
`

const teamTho = `
  <table>
    <tbody>
    <tr class="team__table-header">
        <td>Positie</td>
        <td>Speler</td>
        <td>Club</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>Remko Pasveer</td>
        <td>Vitesse</td>
    </tr>
    <tr>
        <td>Keeper</td>
        <td>res: Bram Verbong</td>
        <td>VVV Venlo</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Bart van Hintum</td>
        <td>FC Groningen</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Lutsharel Geertruida</td>
        <td>Feyenoord</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>Giacomo Quagliata</td>
        <td>Heracles</td>
    </tr>
    <tr>
        <td>Verdediger</td>
        <td>res: Luuk Wouters</td>
        <td>RKC Waalwijk</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Sander van der Streek</td>
        <td>FC Utrecht</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Teun Koopmeiners</td>
        <td>AZ</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Rodney Kongolo</td>
        <td>SC Heerenveen</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>Gorkem Saglam</td>
        <td>Willem II</td>
    </tr>
    <tr>
        <td>Middenvelder</td>
        <td>res: Deroy Duarte</td>
        <td>Sparta Rotterdam</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Sebastien Haller</td>
        <td>Ajax</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Donyelll Malen</td>
        <td>PSV</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>Danilo Pereira da Silva</td>
        <td>FC Twente</td>
    </tr>
    <tr>
        <td>Aanvaller</td>
        <td>res: Jonas Arweiler</td>
        <td>ADO Den Haag</td>
    </tr>
    </tbody>
  </table>
`