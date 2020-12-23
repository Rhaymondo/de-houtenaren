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

amountWins.forEach(function(el) {
    let amount = el.dataset.wins;
    let amountPlayed = 13;
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