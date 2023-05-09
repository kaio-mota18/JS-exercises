document
  .querySelector("select[name='select-option']")
  .addEventListener('change', show)

//para eu utilizar uma função dentro do método addEventListener, você passará a função como objeto. Logo, SEM parênteses.

function show() {
  alert(event.target.value)
}

//outra opção seria declarar a função dentro do evento addEventListener. Nesse caso, passaria os parênteses
