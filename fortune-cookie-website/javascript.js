let badFortunes = [
    "A manhole cover will jump up and destroy your car.",
    "What you thought was chicken was actually dog.",
    "Undecided.",
    "Your battery will drain while your phone is off.",
    "A rogue semicolon will darken your future.",
    "Watch your curly braces, they mean you harm.",
    "You will find yourself in need of a bathroom, but unable to find one.",
    "Hangnails.",
    "It will take far more alcohol for you to get drunk than you have money in your wallet.",
    "Dogs don't like you.",
    "Your charging cord will be too short to reach the outlet.",
    "You will always be two minutes later than you think you will be.",
    "Just take the L bro.",
    "Sunburn on a rainy day."
]

function giveFortune() {
    const fortune = document.querySelector(".fortune");
    getFortune();
    showFortune(fortune);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showFortune(fortune) {
    if(!fortune.parentElement.parentElement.classList.contains(".hidden")){
        fortune.parentElement.parentElement.classList.remove("hidden");
    }
}

function hideFortune(fortune){
    if(!fortune.parentElement.parentElement.classList.contains(".hidden")){
        fortune.parentElement.parentElement.classList.add("hidden");
    }
}

function getFortune() {
    const fortune = document.querySelector(".fortune");
    axios.get('http://fortunecookieapi.herokuapp.com/')
        .then((response) => {
            fortune.innerText = response.data;
        })
}

document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".fortune-cookie");
    img.addEventListener("click", () => {
        giveFortune();
    });

    const hideBtn = document.querySelector(".hide-button");
    hideBtn.addEventListener("click", () => {
        hideFortune(hideBtn);
    })


})