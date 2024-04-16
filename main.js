const Productos = ["Guitarras", "Bajos", "Baterias", "Microfonos", "Teclados", "Amplificadores"]

const ContenedorDeProductos = document.getElementById("productos")


Productos.forEach((producto)=>{
    ContenedorDeProductos.innerHTML += `
    <div>
        <h1> ${producto} </h1>
        <button class="Boton-agregar"> Agregar </button>
    </div>`
})


const BotonesAgregar = document.getElementsByClassName("Boton-agregar")

const BotonesAgregarArray = Array.from(BotonesAgregar)

BotonesAgregarArray.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
        console.dir(e.target.parentElement.children[0].innerText)
    })
})