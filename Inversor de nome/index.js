let spaceshipName = prompt(
  'Digite o nome da nave',
  'Digite aqui o nome da nave'
)

let newSpaceshipName = ''

let count = 0

for (let j = spaceshipName.length - 1; j >= 0; j--) {
  if (spaceshipName[j] == 'e' || spaceshipName[j] == 'E') {
    break
  }

  newSpaceshipName += spaceshipName[j]
}

alert('Novo nome da nave: ' + newSpaceshipName)
