"use strict";
const firtName = prompt("Insira seu primeiro nome:");
const secondName = prompt("Insira seu segundo nome:");
const studyArea = prompt("Insira seu campo de estudo:");
const yearOfBirth = parseFloat(prompt("Insira seu ano de nascimento:"));
alert("Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    firtName +
    " " +
    secondName +
    "\nCampo de estudo: " +
    studyArea +
    "\nIdade: " +
    ((new Date().getFullYear()) - yearOfBirth));
