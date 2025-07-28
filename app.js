// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const numeroAleatorio = (max) => {
    return Math.floor(Math.random() * max);
}

const limpiarInput = (id) => {
    document.getElementById(id).value = '';
}

const elementoSeleccionado = (id) => {
    return document.getElementById(id);
}

const actualizarListaDeAmigos = () => {
    const listaAmigos = elementoSeleccionado('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    })
}

const alerta = (titulo, icono) => {
    Swal.fire({
        title: titulo,
        icon: icono,
        draggable: true
    });
    return null;
}

const validarEntrada = (entrada) => {

    if (entrada === '') {
        alerta("Por favor, inserte un nombre.", "error");
    } else if (entrada.length < 3) {
        alerta("Por favor, inserte un nombre con un mínimo de 3 caracteres", "error");
    }
    if (!isNaN(entrada)) {
        alerta("Por favor, inserte un nombre no un numero.", "error");
    }
    return entrada;
}
const agregarAmigo = () => {
    const amigo = validarEntrada(document.getElementById('amigo').value);

    if (amigo) {
        amigos.push(amigo);
    }
    limpiarInput('amigo');
    actualizarListaDeAmigos();
}

const sortearAmigo = () => {
    if (amigos.length === 0) {
        alerta("No hay amigos ingresados 😢", "error");
        return;
    }
    const indice = numeroAleatorio(amigos.length);
    elementoSeleccionado('listaAmigos').innerHTML = "";
    elementoSeleccionado('resultado').innerHTML = `El amigo secreto es: ${amigos[indice]}`
}


