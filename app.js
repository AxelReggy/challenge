
let amigos = [];

function agregarAmigo() {
  // Obtener el valor del campo de texto
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // Eliminar espacios en blanco al principio y al final

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Inserte un nombre!");
    return;
  }

  amigos.push(nombre);

  input.value = "";

  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array de amigos y agregar cada nombre como un <li> en la lista
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {
  // Validar si hay amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear!");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("amigoSorteado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  const lista = document.getElementById("listaAmigos");
  lista.style.display = "none";  // Ocultar la lista

  // Limpiar el arreglo de amigos para que no se repita el sorteo
  amigos = [];
}
