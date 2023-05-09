// construtor que será utilizado na ufnção addItem
class NewItemInTheBackpack {
  constructor(name, quantity, type) {
    this.name = name
    this.quantity = quantity
    this.type = type
  }
}

function addItem() {
  let newName = document.getElementById('ItemName').value
  let newQuantity = document.getElementById('ItemQuantity').value
  let newType = document.getElementById('ItemType').value

  var registerItem = new NewItemInTheBackpack(newName, newQuantity, newType)

  let printingItem =
    'Item: ' +
    registerItem.name +
    '\nQuantidade: ' +
    registerItem.quantity +
    '\nTipo do item: ' +
    registerItem.type +
    '\n'

  const list = document.createElement('li')
  list.innerText = printingItem

  const buttonToRemove = document.createElement('button')
  buttonToRemove.type = 'button'
  buttonToRemove.innerText = 'Remover item'
  buttonToRemove.setAttribute('onclick', 'removeItem(this)')

  list.appendChild(buttonToRemove)

  const breakLine = document.createElement('hr')
  list.appendChild(breakLine)

  document.getElementById('new-item').appendChild(list)

  var backpackTotalItems = 0
  backpackTotalItems += newQuantity

  //esta função não está excluindo automaticamente os itens
  if (backpackTotalItems > totalSize) {
    alert('Quantidade máxima de itens excedida!\nRetirando itens!')
    maxCapacityRemove(list)
  }
}

//por enquanto, função sem uso
function maxCapacityRemove(itemLI) {
  let itemsToBeRemoved = itemLI.parentNode
  document.getElementById('new-item').removeChild(itemsToBeRemoved)
}

function removeItem(button) {
  let liToBeRemoved = button.parentNode
  document.getElementById('new-item').removeChild(liToBeRemoved)
}

//função para o viajante escolher a mochila

function startingUpTheJourney() {
  alert('Bem-vindo viajante!\nSua primeira missão é escolher sua mochila.')

  do {
    let chosenOption = prompt(
      'Qual o tamanho da mochila que você deseja para a sua viagem?' +
        '\n1 - PEQUENA (ATÉ 10 ITENS)\n2 - MÉDIA(ATÉ 20 ITENS)\n3 - GRANDE (ATÉ 30 ITENS)'
    )
    var backpackSize

    switch (chosenOption) {
      case '1':
        backpackSize = 10
        break
      case '2':
        backpackSize = 10
        break
      case '3':
        backpackSize = 10
        break
      default:
        alert('Opção inválida')
        break
    }
  } while (chosenOption != '1' || chosenOption != '2' || chosenOption != '3')

  return backpackSize
}

var totalSize = startingUpTheJourney()
