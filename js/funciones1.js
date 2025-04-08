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


//ejercicio 3 con String que devuelve un array a un caracter
const dividirTexto = (cadena, separador = ' ') => String(cadena).split(separador);

// Ejemplo de uso
console.log(dividirTexto("hola mundo")); // Devuelve: ["hola", "mundo"]


//new
function Person(nombre,apellido){
    this.name = "luisa"
    this.lastname = "Forero"
}

//Tiene un constructor y un método: Crear diferentes elementos de esta misma clase 
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const juan = new Persona("Luisa", 60);
const maria = new Persona("María", 10);
juan.saludar();
maria.saludar();

//Crear una clase animal con propiedades y métodos
class Animal {
    constructor(nombre, sonido, animal) {
        this.nombre = nombre;
        this.sonido = sonido;
        this.animal = animal;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} hago ${this.sonido} y son un ${this.animal}`);
    }
}

const Eloy = new Animal("Eloy", "Miau", "gato");
const Tony = new Animal("Tony", "Guau", "Perro");
Eloy.saludar();
Tony.saludar();

//Heredar una clase y sobrescribir un método

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, raza); // Llama al constructor de la clase padre (animal)
        this.raza = raza;
    }
    hablar() {
        console.log(`${this.nombre} dice: Guau su raza es ${this.raza}`);
    
    }
}
const Nero = new Perro("Nero");
Nero.hablar();

//Ejercicio Clase libro
class libro {
    constructor(titulo, autor, añopublicación) {
        this.titulo = titulo;
        this.autor = autor;
        this.añopublicación = añopublicación;
    }

    describir() {
        console.log(`Tengo un libro llamado ${this.titulo} de ${this.autor} ${this.añopublicación}`);
    }
}

const Elprincipito = new libro("El principito", "1943", "Antoine de Saint-Exupéry");
Elprincipito.describir();


//Heredar una clase y sobrescribir un método
/*class libro1 extends describir1{
    constructor(titulo, autor, añopublicación) {
        super(titulo, autor, añopublicación); // Llama al constructor de la clase padre (animal)
        this.titulo = titulo;
    }
    describir1() {
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.añopublicación}`);
    
    }
}*/

//Cuenta bancaria
/*class CuentaBancaria {
    #saldo;
        constructor(depositar) {                 //Cuando se crea una nueva cuenta, se guarda el saldo inicil como valor interno en #saldo.
        this.saldo = saldo;
    }

    
   depositar() {                            //Permite ver el saldo, pero no permite modificarlo directamente. Es una forma segura de acceder a un dato privado.
        return `Tu saldo es: $${this.saldo}`;
    }

   
    retirar(monto) {                          // Este método permite modificar el saldo (depositar dinero)
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Has depositado $${monto}`);
        } else {
            console.log("El monto debe ser mayor a 0");
        }
    }
}

// Crear cuenta bancaria
const miCuenta = new CuentaBancaria(1000);       
console.log(depositar.obtenerSaldo()); // Tu saldo es: $1000
miCuenta.depositar(500);
console.log(saldo.obtenerSaldo()); // Tu saldo es: $1500 */

// Es una propiedad privada, es decir, solo se puede usar dentro de la clase.

/*class CuentaBancaria {
    #saldo;                                     // Es una propiedad privada, es decir, solo se puede usar dentro de la clase.

    constructor(saldoInicial) {                 //Cuando se crea una nueva cuenta, se guarda el saldo inicial como valor interno en #saldo.
        this.#saldo = saldoInicial;
    }

    
    obtenerSaldo() {                            //Permite ver el saldo, pero no permite modificarlo directamente. Es una forma segura de acceder a un dato privado.
        return `Tu saldo es: $${this.#saldo}`;
    }

   
    depositar(monto) {                          // Este método permite modificar el saldo (depositar dinero)
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Has depositado $${monto}`);
        } else {
            console.log("El monto debe ser mayor a 0");
        }
    }
}


// Crear cuenta bancaria
const miCuenta = new CuentaBancaria(1000);       
console.log(miCuenta.obtenerSaldo()); // Tu saldo es: $1000
miCuenta.depositar(500);
console.log(miCuenta.obtenerSaldo()); // Tu saldo es: $1500 */

/*class CuentaAhorro extends CuentaBancaria {
    constructor(titular, saldoInicial, interes) {
      super(titular, saldoInicial);
      this.interes = interes;
    }
    aplicarInteres() {
      const ganancia = this.saldo * this.interes;
      this.saldo += ganancia;
      console.log(`Interés aplicado. Nuevo saldo: $${this.saldo}`);
    }
  
    // POLIMORFISMO: sobrescribimos el método "retirar" del padre
    retirar(cantidad) {
      console.log("Esta cuenta no permite retiros.");
    }
  }

const miCuenta = new CuentaAhorro(titular `any`, saldoInicial `any`);*/




// Clase base
class CuentaBancaria {
    constructor(titular, saldoInicial) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Retiro exitoso. Nuevo saldo: $${this.saldo}`);
      } else {
        console.log("Fondos insuficientes.");
      }
    }
  }
  

  // Instanciamos una cuenta de ahorro
const miCuenta = new CuentaBancaria("Juan Pérez", 890000);
  
  // Llamamos métodos para ver resultados en consola
miCuenta.retirar(900000);       // Muestra mensaje que no permite retiros
  
