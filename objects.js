// TODO: Crear un objeto libro con propiedades
// como título, autor y año de publicación.
// Imprimir en consola.

var libro = {
  titulo: `The Web Application Hacker's Handbook`,
  autor: [`Daffyd Stuttard`, `Marcus Pinto`],
  anioDePublicacion: 2011,
  descripcion() {
    return `Titulo del libro: ${this.titulo}\nAutor/es: ${this.autor}`;
  },
  // Setter
  set anioPublicado(anio) {
    this.anioDePublicacion = anio;
  },
  // Getter
  get anioPublicado() {
    return `${this.anioDePublicacion}`;
  },
};
console.log(`[!] Datos del libro\n`);
console.log(libro);
console.log(`\n[!] Descripcion del libro\n`);
console.log(libro.descripcion());

// TODO: Crea un objeto llamado estudiante con propiedades nombre,
// edad y direccion. direccion debe ser otro objeto con propiedades calle,
// ciudad y pais. Imprime la dirección completa del estudiante.

var estudiante = {
  nombre: `Kevin`,
  edad: `21`,
  //Objeto anidado
  direccion: {
    calle: `Tucumán`,
    ciudad: `Colón`,
    pais: `Argentina`,
  },
};

console.log(`\n[!] Dirección del estudiante\n`);
console.log(estudiante.direccion);

var producto = {
  nombre: "SSD 240gb",
  precio: 120000,
  disponible: true,
};

console.log(`\nDatos del Producto (original sin modificar)\n`);
for (let propiedad in producto) {
  //uso de hasOwnProperty() para asegurarse de que la propiedad solo pertenece a ese objeto y no es ninguna propipedad hererdad.
  if (producto.hasOwnProperty(propiedad)) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }
}

//actualizando la propiedad precio de producto.

producto.precio = 125000;

console.log(`\nProducto con precio actualizado\n`);
//Usando el mismo bucle de antes
for (let propiedad in producto) {
  if (producto.hasOwnProperty(propiedad)) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }
}

//Hacer funcion para comprobar la existencia de una propiedad en un objeto.

function tienePropiedad(objeto, propiedad) {
  let validacion = false;
  for (let property in objeto) {
    if (property === propiedad && objeto.hasOwnProperty(property)) {
      validacion = true;
    }
  }
  return validacion;
}

//Ejemplo de uso de funcion
console.log(`\nVerificacion de existencia de propiedades de producto\n`);
console.log(`Existe precio?`);
console.log(tienePropiedad(producto, "precio"));
console.log(`\nExiste descripcion?`);
console.log(tienePropiedad(producto, "descripcion"));

//Eliminar la propiedad disponible de producto.

delete producto.disponible;

console.log(`\nProducto sin la propiedad disponible\n`);
console.log(producto);

//Combinacion de objetos con object.assign()

const persona1 = {
  nombre: "Juan",
  edad: 15,
};

const persona2 = {
  nombre: "José",
  edad: 21,
};
// NOTE:Object.assign cuando recibe objetos con las mismas propiedades
// sobreescribe las propiedades con la ultima fuente asignada
const personas_combinadas = Object.assign({}, persona1, persona2);
console.log(`\n Combinacion de persona1 y persona2\n`);
console.log(personas_combinadas);

//Copiar un objeto con json.stringify y json.parse y modificar la copia sin alterar el original

const json_estudiante = JSON.stringify(estudiante);
const copia_estudiante = JSON.parse(json_estudiante);

copia_estudiante.nombre = "Pepe";

console.log(`\nNombre original de estudiante\n`);
console.log(estudiante.nombre);
console.log(`\n Nombre de copia de estudiante\n`);
console.log(copia_estudiante.nombre);

//Getter y setter

console.log(
  `\nAño de publiacion modificado con setter y obtenido con getter\n`,
);
libro.anioPublicado = 2026;

console.log(libro.anioPublicado);
