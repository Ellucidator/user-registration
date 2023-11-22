const firtName:string = prompt("Insira seu primeiro nome:")!;
const secondName:string = prompt("Insira seu segundo nome:")!;
const studyArea:string = prompt("Insira seu campo de estudo:")!;
const yearOfBirth:number = parseFloat(prompt("Insira seu ano de nascimento:")!);

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    firtName +
    " " +
    secondName +
    "\nCampo de estudo: " +
    studyArea +
    "\nIdade: " +
    ((new Date().getFullYear()) - yearOfBirth)
);
