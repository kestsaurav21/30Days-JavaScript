

const url = "https://dummyjson.com/quotes/random";
const author = document.getElementById('author');
const quote = document.getElementById('quote');

async function  getQuote(url) {

    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    
}
