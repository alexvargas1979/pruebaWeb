// console.log('consola en el navegador')
//const h1 = document.querySelector('h1')
//console.log(h1)

const inputNombreProducto = document.querySelector('#NombreProducto')
const inputPrecioProducto  = document.querySelector('#PrecioProducto')
//console.log ({inputNombreProducto,inputPrecioProducto})
const btnCrearProducto = document.querySelector('button')

btnCrearProducto.addEventListener('click', (e) => {
   // console.log({e})
   // console.log({nombre: inputNombreProducto.value, precio: inputPrecioProducto.value })
   const NomProducto = inputNombreProducto.value
   const PrecProducto = inputPrecioProducto.value

   fetch('/api/v1/productos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({
        NomProducto,
        PrecProducto,
    }),
    })
})