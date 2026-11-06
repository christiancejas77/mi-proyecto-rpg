alert("Bienvenido al Creador de Personajes RPG!");
alert("A continuacion vas a crear tu propio personaje RPG!");

const nombrePersonaje = prompt("Ingresa el nombre de tu personaje: ");
console.log(nombrePersonaje);
const razaPersonaje = prompt("Ingresa la raza de tu personaje (Humano, Elfo, Enano, Orco): ");
console.log(razaPersonaje);
const clasePersonaje = prompt("Ingresa la clase de tu personaje (Guerrero, Mago, Arquero, Ladron): ");
console.log(clasePersonaje);

const nivelPersonaje = parseInt(prompt("Ingresa el nivel de tu personaje: "));
console.log(nivelPersonaje);
const vidaBase = parseInt(prompt("Ingresa la vida base de tu personaje: "));
console.log(vidaBase);
const ataqueBase = parseInt(prompt("Ingresa el ataque base de tu personaje: "));
console.log(ataqueBase);

alert("Tu personaje ha sido creado con exito!");
alert("Ahora vamos a calcular las estadisticas finales de tu personaje!");

const vidaFinal = vidaBase + (nivelPersonaje * 10);
const ataqueFinal = ataqueBase + (nivelPersonaje * 3);

console.log(vidaFinal);
console.log(ataqueFinal);

alert("Ficha de personaje:\nNombre: " + nombrePersonaje + "\nRaza: " + razaPersonaje + "\nClase: " + clasePersonaje + "\nNivel: " + nivelPersonaje + "\nVida Final: " + vidaFinal + "\nAtaque Final: " + ataqueFinal);