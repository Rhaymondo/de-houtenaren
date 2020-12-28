tippy('.winning-score', {
    content: 'Gefeliciteerd goed gedaan!! 🎉',
    animation: 'scale',
    theme: 'light'
  });

  tippy('.go-team', {
    content: 'Klik om team te bekijken ',
    animation: 'scale',
    placement: 'left-end',
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

var i,j,temparray,chunk = 39;
for (i=0,j=word.length; i<j; i+=chunk) {
    temparray = word.slice(i,i+chunk);
    console.log(temparray);
}

amountWins.forEach(function(el) {
    let amount = el.dataset.wins;
    let amountPlayed = 14;
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