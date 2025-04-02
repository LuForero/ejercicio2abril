let producto = {
    nombre: "Empanadas",
    precio: 2900,
    descripcion: "Empanadas deliciosas horneadas.",
    stock: 10,
    imagenes: [
        "./img/img-grupo-mujeres.jpg",
        "https://example.com/imagen2.jpg"
    ],
    mostrarDetalles: function() {
        console.log(`Nombre: ${this.nombre} Precio: ${this.precio} Descripción: ${this.descripcion}`);
    }
};

// Acceso y actualización
console.log("Precio del producto: " + producto.precio);
producto.stock -= 1; // Se ha vendido un producto

//productos en stock
producto.stock--;
console.log("stock actualizad: " + producto.stock);


producto.imagenes.push("./img/imagen3.jpg"); // Agregando nueva imagen
console.log("imagenes del producto: ", producto.imagenes);

producto.mostrarDetalles();

// Exploración si tiene descuento
console.log (producto.hasOwnProperty("descuento"));


console.log("Cantidad de propiedades del producto:", Object.keys(producto).length);
console.log("Cantidad de propiedades del producto:", Object.keys(producto));


/*funciones: Programa una función que cuente el número de caracteres de una
cadena de texto, por ejemplo:  miFuncion("Hola Mundo") devolvera 10 */


function contarCaracteres(cadena) {
    console.log("Número de caracteres:", cadena.length);
}

// Ejemplo de uso
contarCaracteres("Alianza Francesa"); // Número de caracteres (letras)

/*Programa una funcion que te devolvera el texto recortado segun el
numero de caracteres indicados,pe. miFuncion("Hola Mundo", 4) devolvera 4. */

const recortarTexto = (cadena, numCaracteres) => cadena.slice(0, numCaracteres);

// Ejemplo de uso
console.log(recortarTexto("Hola Mundo", 4)); // Devuelve: "Hola"


