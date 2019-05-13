var quoteGen = document.getElementById('quoteGen')
var quotes = ['My young apprentice is a good man.','Nice, my hazelnut coffee is steaming hot.', 'Alright dude, I\'ll let you put the creamer and the sugar in yourself.', 'Jud is a powerful foe, but nonetheless, I should be able to quickly dispatch him with LITTLE to NO effort.', 'Are we, like, ready, to like go back to working on this?']

quoteGen.addEventListener('click',generateTheQuote);

function generateTheQuote () {
let randomQuote = Math.floor(Math.random()*quotes.length)

document.getElementById('innerText').innerHTML = quotes[randomQuote]
}