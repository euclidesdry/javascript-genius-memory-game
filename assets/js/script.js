let order = [];
let clickedOrder = [];
let score = 0;

const scoreElement = document.querySelector(".score__number");
const blue__card = document.querySelector(".blue__card");
const red__card = document.querySelector(".red__card");
const yellow__card = document.querySelector(".yellow__card");
const green__card = document.querySelector(".green__card");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElementColor(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

// turn on the light color when the card is active;
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add("card__is-selected");
    }, number - 250);

    setTimeout(() => {
        element.classList.remove("card__is-selected");
    });
};

// check if the card is the same of the order generated in the game
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }

        if (clickedOrder.length === order.length) {
            alert(
                `Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`
            );
            nextLevel();
        }
    }
};

// Function to clicking the card by User
let click__card = (color) => {
    console.log("clicked", color);
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add("card__is-selected");

    setTimeout(() => {
        createElementColor(color).classList.remove("card__is-selected");
        checkOrder();
    }, 250);
};

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

// Function to return element color
let createElementColor = (color) => {
    if (color === 0) {
        return green__card;
    } else if (color === 1) {
        return red__card;
    } else if (color === 2) {
        return yellow__card;
    } else if (color === 3) {
        return blue__card;
    }
};

let nextLevel = () => {
    score++;
    scoreElement.innerHTML = score;
    shuffleOrder();
};

let gameOver = () => {
    alert(
        `Pontuação: ${score}\n Você perdeu o jogo! \n Clique em OK para iniciar um novo jogo!`
    );
    order = [];
    clickedOrder = [];

    playGame();
};

let playGame = () => {
    alert("Bem vindo ao Genius, Iniciando um novo jogo!");
    score = 0;
    scoreElement.innerHTML = score;
    nextLevel();
};

green__card.addEventListener("click", () => click__card(0));
red__card.addEventListener("click", () => click__card(1));
yellow__card.addEventListener("click", () => click__card(2));
blue__card.addEventListener("click", () => click__card(3));

playGame();
