let spaceshipName = prompt('Digite o nome da nave')

let spaceshipVelocity = 0

let optionChosen

function speedUp(velocity) {
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity) {
  let newVelocity = velocity - 5
  if (newVelocity < 0) {
    alert('Não é possível descelerar mais')
    newVelocity = 0
  }
  return newVelocity
}

function boardComputer(name, velocity) {
  alert('Nave: ' + name + '\nVelocidade: ' + velocity + 'km/s')
}

do {
  optionChosen = prompt(
    'Oque deseja fazer?' +
      '\n1- Acelerar a nave em 5km/s' +
      '\n2- Desacelerar a nave em 5km/s' +
      '\n3- Mostrar o computador de bordo' +
      '\n4- Sair'
  )

  switch (optionChosen) {
    case '1':
      spaceshipVelocity = speedUp(spaceshipVelocity)
      break
    case '2':
      spaceshipVelocity = slowDown(spaceshipVelocity)
      break
    case '3':
      boardComputer(spaceshipName, spaceshipVelocity)
      break
  }
} while (optionChosen != 4)
