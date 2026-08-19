
const USUARIOS = "https://jsonplaceholder.typicode.com/users"
const POST_URL = "https://jsonplaceholder.typicode.com/posts"


const CREDENCIALES = {
    username: "John Doe",
    password: "secret123"
};

const DATA = {
    nombre: "Pepe",
    email: "test@example.com",
    password: "password123"
};


// consumo de datos de una API con fetch
//Una sola llamada para que con un solo fetch asi no se hacen varias llamadas y evitar la desincronizacion de datos
function obtenerUsuarios() {
    return fetch(USUARIOS)
        .then(response => response.json());
}

function obtenerNombresDeUsuarios(listaDeUsuarios) {
    return listaDeUsuarios.map(usuario => usuario.name);
}

function autenticarUsuario(credenciales) {
    return credenciales.username === CREDENCIALES.username && credenciales.password === CREDENCIALES.password;
}

function mapearUsuarios(listaDeUsuarios) {
    return listaDeUsuarios.map(usuario => ({
        name: usuario.name,
        email: usuario.email
    }));
}

function validarFormulario(nombre, email, password) {
    if (!nombre || !email || !password) {
        throw new Error("[x] Todos los campos son obligatorios");
    return false
    }

    return true
}


function obtenerPagina(array, numPag) {
    const itemsPorPagina = 5;
    const indiceInicial = (numPag - 1) * itemsPorPagina;
    return array.slice(indiceInicial, indiceInicial + itemsPorPagina);
}


function enviarDatos(data) {
    return fetch(POST_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}


function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

function generarToken(usuario) {
    // 1. Crear el encabezado (Header)
    const header = {
        alg: "HS256", // Algoritmo de firma (simulado)
        typ: "JWT"    // Tipo de token
    };

    // 2. El contenido (Payload) es el propio usuario
    const payload = usuario;

    // 3. Simular una firma (en un caso real, esto sería un hash criptográfico)
    const signature = "firma_secreta_simulada";

    // Codificar en Base64 y unir las partes con '.'
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const encodedSignature = btoa(signature);

    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}


function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}


async function main()   {
    
    
    // uso de await para esperar a que la promesa se resuelva antes de continuar con el resto del código
    // guardar la peticion original en una variable para poder usarla despues y no hacer otra llamada a la API
    const request = await obtenerUsuarios()

    
    // datos de request original
    console.log(`\n[+] Nombres de usuarios obtenidos de la API:`);
    console.log(request)
    
    // solo nombres de usuarios
    console.log(`\n[+] Nombres de usuarios:`);
    console.log(obtenerNombresDeUsuarios(request))
    
    const loginExitoso = autenticarUsuario(CREDENCIALES)
    // uso de operador ternario para mostrar si la autenticacion fue exitosa o fallida sintaxis={condicion ? valor_si_verdadero : valor_si_falso}
    console.log(`\n[+] Autenticación de usuario: ${loginExitoso ? "Exitosa" : "Fallida"}\n`);
    
    const loginFallido = autenticarUsuario({
        username: "Jane Doe",
        password: "wrongpassword"
    })
    console.log(`\n[+] Autenticación de usuario: ${loginFallido ? "Exitosa" : "Fallida"}\n`);

    console.log(`\n[+] Mapeo de usuarios:`);
    console.log(mapearUsuarios(request))

    if (validarFormulario("John Doe", "test@example.com", "secret123")) {
        console.log(`\n[+] Formulario válido\n`);
    }


    // try catch para que no interrumpa la ejecucion del programa si hay un error en la validacion del formulario
    try {
        validarFormulario("", "test@example.com", "secret123");
        console.log(`\n[+] Formulario válido\n`);
    } catch (error) {
        console.error(error.message);
    }

    // Ejemplo de paginación
    const pagina1 = obtenerPagina(request, 1);
    console.log(`\n[+] Usuarios en la página 1:`);
    console.log(pagina1.map(u => u.name));

    
    
    
    const response = await enviarDatos(DATA);
    console.log(`\n[+] Respuesta del servidor:`);
    console.log(response);
    
    // Ejemplo de búsqueda de usuario por email
    const emailABuscar = "Sincere@april.biz"; // Email del primer usuario en la API de ejemplo
    const usuarioEncontrado = buscarUsuarioPorEmail(request, emailABuscar);
    console.log(`\n[+] Buscando usuario con email "${emailABuscar}":`);
    console.log(usuarioEncontrado);

    // Ejemplo de generación de token JWT
    if (usuarioEncontrado) {
        const token = generarToken(usuarioEncontrado);
        console.log(`\n[+] Token JWT simulado para ${usuarioEncontrado.name}:`);
        console.log(token);
    }

    // Ejemplo de actualización de usuario
    if (usuarioEncontrado) {
        const cambios = {
            username: "BretTheGreat", // Actualiza una propiedad existente
            website: "hildegard.org"   // Actualiza otra propiedad
        };
        const usuarioActualizado = actualizarUsuario(usuarioEncontrado, cambios);
        console.log(`\n[+] Actualizando datos para ${usuarioEncontrado.name}:`);
        console.log("Usuario Original:", { username: usuarioEncontrado.username, website: usuarioEncontrado.website });
        console.log("Usuario Actualizado:", { username: usuarioActualizado.username, website: usuarioActualizado.website });
    }

}



main()
