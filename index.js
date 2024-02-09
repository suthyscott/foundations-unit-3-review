console.log('Hello World')

let pizza1 = document.getElementById('pizza1')
let pizza2 = document.getElementById('pizza2')
let pizza3 = document.getElementById('pizza3')
let pizzaForm = document.querySelector('form')
let pizzaName = document.getElementById('pizza-name')

const pepperoni = () => {
    alert('Pepperoni is the best!')
}

const bbq = () => {
    alert('Everyone loves barbaque!')
}

const hawaiian = () => {
    alert('...Why is there pineapple on my pizza?')
}

const suggestion = (e) => {
    e.preventDefault()

    alert(`Your idea for a ${pizzaName.value} pizza is a good suggestion! We'll get to it in 3-5 business years.`)
}


pizza1.addEventListener('mouseover', pepperoni)
pizza2.addEventListener('click', bbq)
pizza3.addEventListener('dblclick', hawaiian)

pizzaForm.addEventListener('submit', suggestion)