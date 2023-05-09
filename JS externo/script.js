alert(
  'Este arquivo Javascript será utilizado para informar a diferença de idade entre duas pessoas.'
)
let idadeMaior, idadeMenor, pessoaNova, pessoaVelha, diferença

pessoaVelha = prompt('Qual o nome da pessoa mais velha?', 'digite o nome aqui')
idadeMaior = prompt('Digite a idade dessa pessoa ', 'digite a idade aqui')
pessoaNova = prompt('Qual o nome da pessoa mais nova?', 'digite o nome aqui')
idadeMenor = prompt('Digite a idade dessa pessoa', 'digite a idade aqui')

diferença = idadeMaior - idadeMenor

alert(
  'Nome da pessoa mais velha: ' +
    pessoaVelha +
    '\nIdade: ' +
    idadeMaior +
    '\n\nNome da pessoa mais nova: ' +
    pessoaNova +
    '\nIdade: ' +
    idadeMenor +
    '\n\nDiferença de idade: ' +
    diferença +
    ' anos.'
)
