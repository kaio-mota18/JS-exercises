var velocity = 150

function slowDown(velocity, printer) {
  let newVelocity = velocity - 20
  if (newVelocity < 0) {
    newVelocity = 0
  }
  printer(newVelocity)
  return newVelocity
}

var updateVelocity = velocity => {
  alert('Velocidade atual: ' + velocity + 'km/s')
}

alert('Velocidade inicial: ' + velocity + 'km/s')

do {
  var velocity = slowDown(velocity, updateVelocity)
} while (velocity > 0)

alert('A nave está parada. Desembarque seguro.')
