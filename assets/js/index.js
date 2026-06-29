// precio = 400000

// precioSpan = document.querySelector(".precio-inicial");
// precioSpan.innerHTML = precio


// variables definidas
const precio = 400000
const lessButton = document.querySelector(".less-btn");
const plusButton = document.querySelector(".plus-btn");

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad");

cantidad.innerHTML = 0;
let amount = cantidad.innerHTML;

let total = document.querySelector(".valor-total")

// crear funciones
function getTotal(){
    total.innerHTML = precio * Number(amount);
}
function increaseAmount(){
    amount++;
    cantidad.innerHTML = amount;
    getTotal();
}
function decreaseAmount(){
    if(amount == 0) {return}
    amount--;
    cantidad.innerHTML = amount;
    getTotal();
}