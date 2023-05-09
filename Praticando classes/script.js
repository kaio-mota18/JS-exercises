class SpatialStation {
  constructor(name, crew) {
    this.name = name
    this.crew = crew
    this.hitched = false
    this.DoorsOpened = false
  }

  //Quando o método for chamado, vai alterar as propriedades hitched e Doors opened, fazer por estrutura de controle
  hitch() {
    this.hitched = true
    this.DoorsOpened = true
  }
}

//variável para para armazenar o nome das naves
var allSpaceships = []

//função para registrar o menu opção 1
function registerSpaceships() {
  alert('Para realizar o engate é necessário cadastrar a nave.')
  let name = prompt('Informe o nome da nave')
  let crew = prompt('Informe a quantidade de tripulantes')
  let spaceship = new SpatialStation(name, crew)

  return spaceship
}

//função para vizualizar as naves
function printList(spaceships) {
  let spaceshipList = ''
  spaceships.forEach((spaceship, index) => {
    spaceshipList +=
      index +
      1 +
      '- ' +
      spaceship.name +
      '\n' +
      spaceship.crew +
      ' tripulantes\n\n'
  })
  alert(spaceshipList)
}

//função para o menu não para de ser exibido se for digitado algo fora das opções
function menu() {
  let chosenOption
  while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
    chosenOption = prompt(
      'O que deseja fazer?\n' +
        '1 - Engatar a nave\n' +
        '2 - Visualizar naves engatadas\n' +
        '3 - Sair'
    )
  }
  return chosenOption
}

let chosenOption

while (chosenOption != '3') {
  chosenOption = menu()

  switch (chosenOption) {
    case '1':
      let spaceshipAdd = registerSpaceships()
      spaceshipAdd.hitch()
      allSpaceships.push(spaceshipAdd)
      break
    case '2':
      printList(allSpaceships)
      break
  }
}
