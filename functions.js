//funcion suma

/**
 * @param  {number} a
 * @param  {number} b
 */
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 7);
console.log(`\n[+] Resultado de la suma = ${resultado}\n`);

//Funcion multiplicar

/**
 * @param  {number} x
 * @param  {number} y
 */
function multiplicar(x, y) {
  return x * y;
}

const multiplicacion = multiplicar(4, 3);
console.log(`[+] Resultado de la multiplicación = ${multiplicacion}`);

//funcion con parametros por defecto

function saludar(nombre = "Invitado") {
  return `Hola, ${nombre}`;
}

const saludado = saludar("Jorge");
const saludado2 = saludar();

console.log(`\n[+] Saludando a Jorge: ${saludado}\n`);
console.log(`\n[+] Saludando sin especificar nombre: ${saludado2}\n`);

//Funcion que devuelve un objeto

function crearPersona(nombre, edad) {
  if (edad < 0) {
    throw new Error("[x] La edad debe ser mayor a 0");
  }
  return {
    nombre: nombre,
    edad: edad,
  };
}

const persona = crearPersona("Rodrigo", 36);

console.log("\n[+] Objeto persona creado con funcion =\n");
console.log(persona);

//funcion que modifica un objeto

/**
 * @param  {object} persona
 * @param  {number} nuevaEdad
 */

function actualizarEdad(persona, nuevaEdad) {
  if (typeof nuevaEdad !== "number" || nuevaEdad < 0) {
    throw new Error("[x] Edad inválida");
  }
  return {
    ...persona,
    edad: nuevaEdad,
  };
}

console.log(`\n[+] Edad cambiada con funcion:\n`);
console.log(actualizarEdad(persona, 40));

//Factorial recursivo

function factorial(n){
  if (n == 1 || n == 0){
    return 1;
  }
    return n * factorial(n-1)
}
console.log(`\n[+] Factorial de 5 = ${factorial(5)}\n`)

//funcion con funcion interna

function despedir(nombre="Invitado"){
  function adios(nombre){
    return `Adios ${nombre}`
  }
  return adios(nombre)
}


console.log(`\n[+] ${despedir()}\n`)


