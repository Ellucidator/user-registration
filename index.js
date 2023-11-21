let primeiro_nome = window.prompt("Insira seu primeiro nome:");
let segundo_nome = window.prompt("Insira seu segundo nome:");
let campo_de_estudo = window.prompt("Insira seu campo de estudo:");
let ano_de_nascimento = window.prompt("Insira seu ano de nascimento:");
//ano_de_nascimento = parseInt(ano_de_nascimento);

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiro_nome +
    " " +
    segundo_nome +
    "\nCampo de estudo: " +
    campo_de_estudo +
    "\nIdade: " +
    (2023 - ano_de_nascimento)
);
