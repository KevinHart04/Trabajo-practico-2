console.log("--- Ejercicios con Arrays ---");

// 1. Agregar y Eliminar Elementos
console.log("\n--- 1. Agregar y Eliminar Elementos ---");
const frutas = ["manzana", "banana", "pera"];
console.log("Array original:", frutas);

frutas.push("naranja"); // Agrega 'naranja' al final
console.log("Después de push('naranja'):", frutas);

const ultimaFruta = frutas.pop(); // Elimina y devuelve el último elemento
console.log("Elemento eliminado con pop:", ultimaFruta);
console.log("Array final:", frutas);

// 2. Array Bidimensional
console.log("\n--- 2. Array Bidimensional ---");
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matriz:", matriz);
const elemento5 = matriz[1][1]; // Accede a la fila 1, columna 1 (el índice empieza en 0)
console.log("Elemento en la posición [1][1]:", elemento5);

// 3. Iterar sobre un Array
console.log("\n--- 3. Iterar sobre un Array (usando el array de frutas) ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Elemento ${i}: ${frutas[i]}`);
}

// 4. Uso de map
console.log("\n--- 4. Uso de map ---");
function elevarAlCuadrado(numeros) {
  return numeros.map(numero => numero * numero);
}
const numerosParaElevar = [1, 2, 3, 4, 5];
const cuadrados = elevarAlCuadrado(numerosParaElevar);
console.log("Array original:", numerosParaElevar);
console.log("Array elevado al cuadrado:", cuadrados);

// 5. Uso de filter
console.log("\n--- 5. Uso de filter ---");
function filtrarMayoresDe(numeros, valor) {
  return numeros.filter(numero => numero > valor);
}
const numerosParaFiltrar = [2, 8, 15, 5, 20, 10];
const mayoresDe10 = filtrarMayoresDe(numerosParaFiltrar, 10);
console.log("Array original:", numerosParaFiltrar);
console.log("Números mayores que 10:", mayoresDe10);

// 6. Uso de reduce
console.log("\n--- 6. Uso de reduce ---");
function sumarElementos(numeros) {
  // El 0 es el valor inicial del acumulador
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
const numerosParaSumar = [5, 10, 15, 20];
const sumaTotal = sumarElementos(numerosParaSumar);
console.log("Array a sumar:", numerosParaSumar);
console.log("Suma total:", sumaTotal);

// 7. Uso de some
console.log("\n--- 7. Uso de some ---");
const numerosSome = [2, 5, 8, 12, 3];
const hayMayorQue10 = numerosSome.some(numero => numero > 10);
console.log("Array:", numerosSome);
console.log("¿Algún número es mayor que 10?:", hayMayorQue10); // Devuelve true

// 8. Uso de every
console.log("\n--- 8. Uso de every ---");
const numerosEvery = [1, 5, 9, 13, 25];
const todosSonPositivos = numerosEvery.every(numero => numero > 0);
console.log("Array:", numerosEvery);
console.log("¿Todos los números son positivos?:", todosSonPositivos); // Devuelve true

// 9. Uso de find
console.log("\n--- 9. Uso de find ---");
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 32 },
  { nombre: "Marta", edad: 28 },
  { nombre: "Carlos", edad: 40 }
];
const primeraPersonaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log("Array de personas:", personas);
console.log("Primera persona mayor de 30 años:", primeraPersonaMayorDe30);

// 10. Uso de sort
console.log("\n--- 10. Uso de sort ---");
const palabras = ["zapallo", "árbol", "barco", "casa"];
console.log("Array original:", palabras);
palabras.sort(); // Ordena alfabéticamente
console.log("Array ordenado:", palabras);