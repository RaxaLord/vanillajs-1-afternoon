console.log('The house always wins!')

let inputId = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

console.log(inputId)
console.log(colorInput)

function setCard() {
    let card = document.getElementById(inputId.value);
    card.style.color = colorInput.value
}