const idContainer = document.querySelector(".advice-id");
const quoteContainer = document.querySelector(".random-quote");
const btn = document.querySelector(".icon-img--btn");

const url_API = "https://api.adviceslip.com/advice";

callAPI(url_API);

btn.onclick = () => callAPI(url_API);

async function callAPI(url) {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            idContainer.textContent = data.slip.id;
            quoteContainer.textContent = data.slip.advice;
        })
        .catch(error => console.error(error));
    }