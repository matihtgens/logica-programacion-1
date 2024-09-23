//? Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.

const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingresa el primer número: "));
let numero2 = Number(prompt("Ingresa el segundo número: "));
let numero3 = Number(prompt("Ingresa el tercer número: "));

//? Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

// Verificar cual es el número mayor
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El número mayor es:", numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El número mayor es:", numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El número mayor es:", numero3);
} else if (numero1 == numero2){
    console.log("El número mayor esta entre el primero y el segundo: ", numero1);
} else if (numero1 == numero3){
    console.log("El número mayor esta entre el primero y el tercero: ", numero1);
} else if (numero2 == numero3){
    console.log("El número mayor esta entre el segundo y el tercero: ", numero2);
}

// Verificar cual es el número menor
if (numero1 < numero2 && numero1 < numero3) {
    console.log("El número menor es:", numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log("El número menor es:", numero2);
} else if (numero3 < numero1 && numero3 < numero2) {
    console.log("El número menor es:", numero3);
}

// Verificar cual es el número del centro
if (numero1 < numero2 && numero3 < numero1) {
    console.log("El número del centro es:", numero1);
} else if (numero2 < numero1 && numero3 < numero2) {
    console.log("El número del centro es:", numero2);
} else if (numero3 < numero1 && numero2 < numero3) {
    console.log("El número del centro es:", numero3);
} else if (numero1 < numero3 && numero2 < numero3) {
    console.log("El número del centro es:", numero1);
} else if (numero1 < numero2 && numero2 < numero3) {
    console.log("El número del centro es:", numero2);
} else if (numero1 < numero2 && numero3 < numero2) {
    console.log("El número del centro es:", numero3);
} 

//? Debe imprimir los números por consola ordenados de mayor a menor, y de menor a mayor.
//? Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola diciendo que los números son iguales.

// Imprimir si algun numero es igual a otro.
if (numero1 == numero2 && numero1 == numero3 && numero2 == numero3) {
    console.log("Todos los números son iguales");
} else if (numero1 == numero2) {
    console.log("El primer número es igual al segundo");
} else if (numero1 == numero3) {
    console.log("El primer número es igual al tercero");
} else if (numero2 == numero3) {
    console.log("El segundo número es igual al tercero");
} else if (numero1 > numero2 && numero1 > numero3) {
    //! Imprimir los números de mayor a menor    
    console.log("Numeros de mayor a menor:")
    console.log(numero1);
    if (numero2 > numero3) {
        console.log(numero2);
        console.log(numero3);
    } else {
        console.log(numero3);
        console.log(numero2);
    }
    //! Imprimir los números de menor a mayor
    console.log("Numeros de menor a mayor:")
    if (numero2 > numero3) {
        console.log(numero3);
        console.log(numero2);
    } else {
        console.log(numero2);
        console.log(numero3);
    }
    console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("Numeros de mayor a menor:")
    console.log(numero2);
    if (numero1 > numero3) {
        console.log(numero1);
        console.log(numero3);
    } else {
        console.log(numero3);
        console.log(numero1);
    }

    console.log("Numeros de menor a mayor:")
    if (numero1 > numero3) {
        console.log(numero3);
        console.log(numero1);
    } else {
        console.log(numero1);
        console.log(numero3);
    }
    console.log(numero2);
} else if (numero3 > numero1 && numero3 > numero2) { 
    console.log("Numeros de mayor a menor:")
    console.log(numero3);
    if (numero1 > numero2) {
        console.log(numero1);
        console.log(numero2);
    } else {
        console.log(numero2);
        console.log(numero1);
    }

    console.log("Numeros de menor a mayor:")
    if (numero2 > numero1) {
        console.log(numero1);
        console.log(numero2);
    } else {
        console.log(numero2);
        console.log(numero1);
    }
    console.log(numero3);
} 


//* Version simplificada con array y sort

const numeros = [numero1, numero2, numero3];

numeros.sort((a, b) => b - a);

console.log(numeros);

let menor = numeros[0];
let centro = numeros[1]; // Esto puede ser igual al menor o mayor si hay duplicados
let mayor = numeros[2];

console.log("El número menor es:", menor);
console.log("El número del centro es:", centro);
console.log("El número mayor es:", mayor);

//* Version simplificada con array y sort