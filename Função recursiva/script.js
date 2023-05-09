// exercício para treinar recursividade de uma função pensando em solucionar um conceito matemático: o fatorial

function fatorial(numero) {
  console.log(`Número ${numero}`)
  if (numero === 0) {
    return 1
  } else if (numero == 1) {
    return 1
  } else {
    console.log(`${numero} * !${numero - 1} `)
    return numero * fatorial(numero - 1)
  }
}

console.log(fatorial(5))
