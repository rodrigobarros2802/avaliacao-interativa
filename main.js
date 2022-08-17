const containerPai = document.querySelector(".container-pai");
const containerFilho = document.querySelector(".container-2");
const submitButton = document.getElementById("enviar");
const rateAgain = document.getElementById("rate");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".botao-filho");

submitButton.addEventListener("click", () => {
    containerFilho.classList.remove("hidden");
    containerPai.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    containerFilho.classList.add("hidden");
    containerPai.style.display = "flex";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})