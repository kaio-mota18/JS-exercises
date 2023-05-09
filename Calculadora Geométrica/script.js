//Função para menu

function selectAnOption() {
  let choice = prompt(
    'Escolha o objeto que você deseja calcular a área: ' +
      '\n1 - triângulo' +
      '\n2 - retângulo' +
      '\n3 - quadrado' +
      '\n4 - trapézio' +
      '\n5 - círculo' +
      '\n6 - SAIR'
  )
  return parseInt(choice)
}

//variável responsável por receber o retorno de Menu

let objectChosen

// objeto com as fórmulas para calcular as áreas

let formulas = {
  triangulo(base, altura) {
    return (base * altura) / 2
  },

  retangulo(base, altura) {
    return base * altura
  },

  quadrado(lado) {
    return lado * lado
  },

  trapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2
  },

  circulo(raio) {
    const pi = 3.14
    return pi * (raio * raio)
  }
}

// Função para operar os cálculos a partir da opção do usuário

function insertData(option) {
  switch (option) {
    case 1: {
      let base = parseFloat(prompt('BASE: '))
      let altura = parseFloat(prompt('ALTURA: '))
      let resultadoTriangulo = formulas.triangulo(base, altura)
      alert(resultadoTriangulo)
      break
    }

    case 2: {
      let base2 = parseFloat(prompt('BASE: '))
      let altura2 = parseFloat(prompt('ALTURA: '))
      if (base2 == altura2) {
        alert(
          'Trata-se de um quadrado e não um retângulo. Quadrados tem lados iguais.'
        )
      } else {
        let resultadoRetangulo = formulas.retangulo(base2, altura2)
        alert(resultadoRetangulo)
      }
      break
    }

    case 3: {
      let lado = parseFloat(prompt('LADO: '))
      let resultadoQuadrado = formulas.quadrado(lado)
      alert(resultadoQuadrado)
      break
    }

    case 4: {
      let baseMaior = parseFloat(prompt('BASE MAIOR: '))
      let baseMenor = parseFloat(prompt('BASE MENOR: '))
      let alturaTrapezio = parseFloat(prompt('ALTURA: '))
      let resultadoTrapezio = formulas.trapezio(
        baseMaior,
        baseMenor,
        alturaTrapezio
      )
      alert(resultadoTrapezio)
      break
    }

    case 5: {
      let raio = parseFloat(prompt('RAIO: '))
      let resultadoCirculo = formulas.circulo(raio)
      alert(resultadoCirculo)
      break
    }
  }
}

//Estrutura de repetição  responsável por continuar até que seja inserido o número 6 e finalize o laço
do {
  objectChosen = selectAnOption()
  insertData(objectChosen)
} while (objectChosen != 6)

alert('Até mais! :D')
