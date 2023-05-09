let mochila = new Array()
let count = 0

//Podem ser inseridos 5 itens (como mostrará na tela). Se for inserido o item "Olho de Fenix", o item será retirado

for (let i = 0; i < 5; i++) {
  count++
  mochila[i] = prompt(
    'Coloque um item na sua mochila, aventureiro',
    +count + '/5 itens'
  )
}

for (let k = 0; k < 5; k++) {
  if (
    mochila[k] == 'Olho de Fenix' ||
    mochila[k] == 'olho de Fenix' ||
    mochila[k] == 'olho de fenix' ||
    mochila[k] == 'Olho de fenix'
  ) {
    alert('Item místico detectado! Processo de retirada')
    mochila.splice(k, 1)
  }
}

for (let j = 0; j < mochila.length; j++) {
  mochila[j] = ' ' + mochila[j]
}

let listOfItems = mochila.join()

alert('Número de itens: ' + mochila.length + '\nItens: ' + listOfItems)
