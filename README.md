# Calculando el Total — Tarjeta de Producto Interactiva 🛒
Proyecto de desafío semanal: tarjeta de producto interactiva desarrollada con HTML5, CSS3 y JavaScript, donde se manipula el DOM para calcular dinámicamente el total a pagar según la cantidad de unidades seleccionadas.
___

## Requerimientos del desafío 🏅
1. Agrega el evento de JavaScript que reacciona ante un clic en el elemento HTML que corresponde. (2.5 Puntos)
2. Aplicar los `querySelector()` e `innerHTML()` de manera correcta para modificar los elementos del DOM. (2.5 Puntos)
3. Implementa la lógica para modificar el total a pagar en función de la cantidad. (2.5 Puntos)
4. Hacer funcionar los botones de `+` y `-` para aumentar y disminuir la cantidad de productos. (2.5 Puntos)
___

## Vista previa 👀
___
🔧 https://tmanzur.github.io/dlm_calculando_el_total/
___

## Tecnologías utilizadas 👩🏻‍💻

- HTML5 - entregado por Desafío Latam
- CSS3 (Flexbox)  - entregado por Desafío Latam
- JavaScript (DOM, manipulación de eventos)
___

## Lógica del proyecto 📏

El precio base del producto es fijo y se define en una constante. Cada clic en los botones `+` / `-` actualiza la cantidad y recalcula el total mediante una función central:

```js
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
```

La cantidad no puede ser negativa: el botón `-` se bloquea cuando llega a 0.
___

## Estructura de archivos 📁

```
├── base.html (entregado por Desafío Latam)
├── README.md
└── assets/
    ├── css/
    │   └── estilos.css (se fixea img)
    └── js/
        └── index.js
```
___

🎀 Autor
Tatiana Manzur M.
Desafío semanal — Bootcamp Desafío Latam
2026
