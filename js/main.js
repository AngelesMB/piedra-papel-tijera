"use strict";

// elementos del html
const selectElement = document.querySelector(".js-select");
const button = document.querySelector(".js-button");
const resultMessage = document.querySelector(".js-resultMessage");
const playerCountElement = document.querySelector(".js-playerCount");
const computerCountElement = document.querySelector(".js-computerCount");

// variables globales: jugadas y ganadora
let userSelection = "";
let computerSelection = "";
let winner = "";

// función para pasar a num el contador
function parseCount(count) {
  parseInt(count);
}

// variables globales contadores
let playerCount = parseInt(playerCountElement.innerHTML);
let computerCount = parseInt(computerCountElement.innerHTML);

console.log("contador en string:", playerCountElement.innerHTML);
console.log("contador parseado", playerCount);

// función habilitar botón
function enableButton(value) {
  if (value !== "") {
    button.removeAttribute("disabled");
  }
}

// función para recoger valor del select
function getSelectValue() {
  const userSelection = selectElement.value;
  return userSelection;
}

// función para consolear la elección de la usuaria
function getWordForValueUser() {
  userSelection = getSelectValue();
  if (userSelection === "rock") {
    return console.log("La usuaria ha jugado PIEDRA");
  } else if (userSelection === "paper") {
    return console.log("La usuaria ha jugado PAPEL");
  } else if (userSelection === "scissors") {
    return console.log("La usuaria ha jugado TIJERA");
  }
  return userSelection;
}

// función generar num aleatorio
function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

// función para comparar valor y palabra
function getWordForValueComputer(value) {
  if (value === "rock") {
    return console.log("El ordenador ha jugado PIEDRA");
  } else if (value === "paper") {
    return console.log("El ordenador ha jugado PAPEL");
  } else {
    return console.log("El ordenador ha jugado TIJERA");
  }
}

// función jugada ordenador según número aleatorio
function getComputerSelection(value) {
  const randomNumber = getRandomNumber(9);
  //   console.log(randomNumber);
  if (value !== "") {
    if (randomNumber <= 3) {
      computerSelection = "rock";
    } else if (randomNumber <= 6) {
      computerSelection = "paper";
    } else {
      computerSelection = "scissors";
    }
    getWordForValueComputer(computerSelection);
  }
  return computerSelection;
}

// función para comparar values
function compareSelections(value1, value2) {
  if (value1 === value2) {
    resultMessage.innerHTML = "Empate";
    winner = "";
  } else if (
    value1 === "rock" &&
    (value2 === "paper" || value2 === "scissors")
  ) {
    resultMessage.innerHTML = "¡Has ganado!";
    winner = "user";
  } else if (value1 === "scissors" && value2 === "paper") {
    resultMessage.innerHTML = "¡Has ganado!";
    winner = "user";
  } else if (value1 === "paper" && value2 === "rock") {
    resultMessage.innerHTML = "¡Has ganado!";
    winner = "user";
  } else {
    resultMessage.innerHTML = "¡Has perdido!";
    winner = "computer";
  }
  console.log("Ganadora:", winner);
  return winner;
}

// función para actualizar contadores
function updateCount(winner) {
  if (winner !== "") {
    if (winner === "user") {
      playerCount++;
      //   playerCountElement = playerCount;
      console.log("contador usuaria", playerCount);
      console.log("contador computadora", computerCount);
    } else {
      computerCount++;
      //   computerCountElement = computerCount;
      console.log("contador usuaria", playerCount);
      console.log("contador computadora", computerCount);
    }
  }
}

// función reset contadores
function resetCount(count) {
  if (count > 3) {
    playerCount = 0;
    computerCount = 0;
    resultMessage.innerHTML = "¡Vamos a jugar!";
  }
}

// función manejadora del click
function handleButtonClick(event) {
  event.preventDefault();
  getWordForValueUser();
  getComputerSelection(userSelection);
  compareSelections(userSelection, computerSelection);
  updateCount(winner);
  resetCount(playerCount);
  resetCount(computerCount);
}

// listener
selectElement.addEventListener("change", enableButton);
button.addEventListener("click", handleButtonClick);
