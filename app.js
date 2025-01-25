let listaAmigos = [];


function limpiarCampos() {
    let campo = document.getElementById("amigo").value = "";
    document.getElementById("resultado").innerHTML = "";

}
/**
 * post: agrega un amigo a la lista de amigos 
 */
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre !== "") {
        listaAmigos.push(nombre);
        mostrarAmigos();
        limpiarCampos();
    } else {
        alert("Por favor, inserte un nombre");

    }

}

/**
 * post: muestra la lista de amigos.
 */
function mostrarAmigos() {
    let elementoDeLista = document.getElementById("listaAmigos");
    elementoDeLista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        elementoDeLista.appendChild(li);
    }
}

/**
 * post: muestra al amigo sorteado.
 */
function sortearAmigo() {
    if (listaAmigos.length !== 0) {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        document.getElementById("listaAmigos").innerHTML = "";
        listaAmigos = [];
        document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSorteado}`;

    }
}