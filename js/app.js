const btn = document.querySelector("#btn")
btn.addEventListener("click", create)

function create(e) {
    e.preventDefault();
    let name = document.querySelector("#letter").value

    /*Seleccionamos el elemento donde estará
    la imagen de la primera letra del nombre*/
    let firstletter = document.querySelector('#name')

    /*Creamos de manera dinamica un contenedor div*/
    let containerLetter = document.createElement('p')
    // containerLetter.innerHTML = name.charAt(0).toUpperCase()
    // containerLetter.innerHTML = name.substring(0, 3).toUpperCase()
    containerLetter.innerHTML = name.slice(0, 3).toUpperCase()
    firstletter.appendChild(containerLetter)

    /*Validamos que el campo nombre no este vacio*/
    if (!name) {
        console.log('Este campo no puede estar vacio')
    }
    else {
        /* Asociamos algunos estilos al div*/
        containerLetter.classList.add('firstLetter')
        /* Removemos el evento de click*/
        btn.removeEventListener('click', create)
        /* Cambiamos el color de circulo*/
        let colores = ['purple', 'darkBlue', 'lightBlue', 'pink', 'orange', 'brown', 'aqua']
        containerLetter.style.background = colores[Math.floor(7 * Math.random())]
    }
}









